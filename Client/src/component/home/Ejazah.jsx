import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Ejazah = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/getAll-subscription")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPlans(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch subscription plans:", err);
        setLoading(false);
      });
  }, []);

  const openPaymentModal = (plan, period) => {
    setSelectedPlan({ ...plan, period });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1",
      }}
    >
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-[#286485] mb-8">
          Subscription Plans
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <img
                  src="https://img.freepik.com/free-photo/close-up-open-holy-book-with-bracelet_23-2148288851.jpg?ga=GA1.1.905776187.1727602890&semt=ais_hybrid&w=740"
                  alt="Subscription Plan"
                  className="w-full h-52 object-cover rounded-xl mb-4"
                />

                <h2 className="text-2xl font-semibold text-[#286485] capitalize mb-2">
                  {plan.planName}
                </h2>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                <div className="mb-4">
                  <h3 className="font-medium text-gray-800 mb-1">Features:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <label className="font-medium text-gray-800 block mb-1">
                    Choose Billing Period:
                  </label>
                  <select
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full border-gray-300 rounded-xl px-3 py-2 text-sm"
                  >
                    <option value="weekly">
                      Weekly - {plan.pricing.weekly} {plan.pricing.currency}
                    </option>
                    <option value="monthly">
                      Monthly - {plan.pricing.monthly} {plan.pricing.currency}
                    </option>
                    <option value="yearly">
                      Yearly - {plan.pricing.yearly} {plan.pricing.currency}
                    </option>
                  </select>
                </div>

                <button
                  className="w-full bg-[#286485] hover:bg-[#1f4f64] text-white font-semibold py-2 rounded-xl transition duration-200"
                  onClick={() => openPaymentModal(plan, selectedPeriod)}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {showModal && selectedPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-lg relative">
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-xl font-bold text-[#286485] mb-4">
                Pay for {selectedPlan.planName} Plan ({selectedPlan.period})
              </h2>
              <p className="mb-4 text-gray-700">
                Total:{" "}
                <strong>
                  {selectedPlan.pricing[selectedPlan.period]}{" "}
                  {selectedPlan.pricing.currency}
                </strong>
              </p>

              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value:
                            selectedPlan.pricing[
                              selectedPlan.period
                            ].toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(
                      `Transaction completed by ${details.payer.name.given_name}`
                    );

                    const userId = localStorage.getItem("userId");

                    fetch("http://localhost:5000/api/users/subscribe", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      credentials: "include",
                      body: JSON.stringify({
                        planName: selectedPlan.planName,
                        period: selectedPlan.period,
                        price: selectedPlan.pricing[selectedPlan.period],
                        currency: selectedPlan.pricing.currency,
                      }),
                    })
                      .then((res) => res.json())
                      .then((response) => {
                        console.log("Subscription updated:", response);
                        closeModal();
                      })
                      .catch((err) => {
                        console.error("Failed to update subscription:", err);
                      });
                  });
                }}
              />
            </div>
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default Ejazah;
