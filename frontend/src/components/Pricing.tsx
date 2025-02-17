import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const Pricing = () => {
  return (
    <section className="pricing-section py-12" id="pricing">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Pricing
      </h2>
      <div className="pricing-cards flex justify-center space-x-6">
        <div className="card bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-lg p-6 w-80 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Starter Plan
          </h3>
          <p className="text-xl font-bold text-white mb-4">$9.99/month</p>
          <ul className="text-white">
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              AI-powered presentation maker
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              100+ templates
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              Basic support
            </li>
          </ul>
        </div>
        <div className="card bg-gradient-to-r from-green-500 to-teal-600 shadow-xl rounded-lg p-6 w-80 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Premium Plan
          </h3>
          <p className="text-xl font-bold text-white mb-4">$29.99/month</p>
          <ul className="text-white">
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              AI-powered presentation maker
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              500+ templates
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              Advanced support
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              Custom branding
            </li>
          </ul>
        </div>
        <div className="card bg-gradient-to-r from-red-500 to-pink-600 shadow-xl rounded-lg p-6 w-80 transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Enterprise Plan
          </h3>
          <p className="text-xl font-bold text-white mb-4">
            Custom pricing for large teams
          </p>
          <ul className="text-white">
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              All features included
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              Priority support
            </li>
            <li className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2" />
              Custom onboarding
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
