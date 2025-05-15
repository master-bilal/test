import React, { useEffect, useState } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PAYPAL_CLIENT_ID =
  "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

const Ijazeh = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  const fetchAvailableSlots = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/teacher/available-slots"
      );
      setAvailableSlots(data);
    } catch (err) {
      console.error("Error fetching slots:", err);
    }
  };

  useEffect(() => {
    fetchAvailableSlots();
  }, []);

  const openBookingModal = (slot) => {
    setSelectedSlot(slot);
    setBookingMessage("");
    setShowModal(true);
    setPaypalLoaded(false);
    // Small timeout to ensure modal is rendered before loading PayPal
    setTimeout(() => setPaypalLoaded(true), 100);
  };

  const handleApprove = async (orderID) => {
    try {
      await axios.post(
        "http://localhost:5000/api/teacher/book-slot",
        { availabilityId: selectedSlot._id },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setBookingMessage("✅ Booking successful!");
      setShowModal(false);
      fetchAvailableSlots();
    } catch (err) {
      console.error("Booking API error:", err);
      setBookingMessage("❌ Booking failed.");
    }
  };

  return (
    <div className="w-full mt-20 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Ijazeh Booking</h1>

      {bookingMessage && (
        <div
          className={`mb-4 p-3 rounded ${
            bookingMessage.includes("❌") ||
            bookingMessage.includes("cancelled") ||
            bookingMessage.includes("error")
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {bookingMessage}
        </div>
      )}

      <div className="grid gap-4">
        {availableSlots.length === 0 ? (
          <p>No available slots.</p>
        ) : (
          availableSlots.map((slot) => (
            <div
              key={slot._id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {new Date(slot.date).toLocaleDateString()} | {slot.startTime}–
                  {slot.endTime}
                </p>
                {slot.meetingUrl && (
                  <a
                    href={slot.meetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm"
                  >
                    Meeting Link
                  </a>
                )}
              </div>
              <button
                onClick={() => openBookingModal(slot)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Book Slot
              </button>
            </div>
          ))
        )}
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Pay 5 USD to Book
            </h2>
            {paypalLoaded && (
              <PayPalScriptProvider
                options={{
                  "client-id": PAYPAL_CLIENT_ID,
                  currency: "USD",
                  components: "buttons",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical", shape: "rect" }}
                  createOrder={(data, actions) =>
                    actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: "5.00",
                          },
                        },
                      ],
                    })
                  }
                  onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    handleApprove(order.id);
                  }}
                  onCancel={() => {
                    setBookingMessage("Payment cancelled.");
                    setShowModal(false);
                  }}
                  onError={(err) => {
                    console.error("PayPal error:", err);
                    setBookingMessage("Payment error.");
                    setShowModal(false);
                  }}
                />
              </PayPalScriptProvider>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full text-center text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ijazeh;
