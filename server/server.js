require("dotenv").config();
const { exec } = require("child_process");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
const firstRequest = true;

const activeRequests = new Map();
app.use(
  cors({
    origin: "https://aks-aislides.netlify.app",
  })
);
app.use(express.json());

app.post("/get-response", async (req, res) => {
  const { prompt } = req.body;
  const requestId = `request-${Date.now()}`;

  try {
    console.log(requestId);
    activeRequests.set(requestId, { status: "processing" });
    const slidesContent = fs.readFileSync("slides.md", "utf-8");
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "codestral-latest",
        messages: [
          {
            role: "user",
            content:
              prompt +
              "Make a using slidev. only generate the slides.md file's content in markdown. Do not include any other text." +
              "use random themes. use images from unsplash. use code snippets from the code provided." +
              "make the slides look professional. use the slidev documentation for reference. use https://cover.sli.dev to generate the cover image." +
              "use this as a sample, you may use these as a reference." +
              slidesContent,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MISTRAL_API}`,
        },
      }
    );

    activeRequests.set(requestId, {
      status: "completed",
      response: response.data,
    });
    console.log(response.data);

    const content = response.data.choices[0].message.content
      .replace(/^```markdown|```$/g, "")
      .trim();
    fs.writeFileSync("aislydes/slides.md", content);

    if (firstRequest) {
      exec(
        "npm i -D playwright-chromium",
        { cwd: "aislydes" },
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.error(`stderr: ${stderr}`);
          firstRequest = false;
        }
      );
    }

    exec("npm run export", { cwd: "aislydes" }, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.json({
        requestId,
        message: "Prompt processed successfully",
        response: response.data,
      });
    });
  } catch (error) {
    activeRequests.set(requestId, { status: "failed", error: error.message });
    res.status(500).json({ error: error.message });
  }
});

app.get("/response-status/:requestId", (req, res) => {
  const requestId = req.params.requestId;
  const request = activeRequests.get(requestId);

  if (!request) {
    return res.status(404).json({ error: "Request not found" });
  }

  res.json(request);
});

app.get("/download-slides", (req, res) => {
  const filePath = path.join(__dirname, "aislydes", "slides-export.pdf");
  res.download(filePath, "slides-export.pdf", (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to download file" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
