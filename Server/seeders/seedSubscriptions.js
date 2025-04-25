const mongoose = require("mongoose");
const Subscription = require("../models/Subscription");

const plans = [
  {
    planName: "basic",
    description: "Essential EJAZEH features for beginners with limited access",
    features: [
      "Access to basic courses",
      "Limited practice tests",
      "Email support",
      "Basic analytics",
    ],
    pricing: {
      weekly: 4.99,
      monthly: 14.99,
      yearly: 149.99,
      currency: "JD",
    },
  },
  {
    planName: "standard",
    description:
      "Enhanced EJAZEH experience for regular users with more features",
    features: [
      "Access to all standard courses",
      "Unlimited practice tests",
      "Priority email support",
      "Advanced analytics",
      "Progress tracking",
      "Certificate of completion",
    ],
    pricing: {
      weekly: 7.99,
      monthly: 24.99,
      yearly: 249.99,
      currency: "JD",
    },
  },
  {
    planName: "premium",
    description:
      "Complete EJAZEH package with all premium features and support",
    features: [
      "Access to all courses including premium",
      "Unlimited practice tests with explanations",
      "24/7 priority support",
      "Detailed analytics dashboard",
      "Personalized learning path",
      "Professional certificates",
      "One-on-one tutoring sessions (2/month)",
      "Early access to new features",
    ],
    pricing: {
      weekly: 12.99,
      monthly: 39.99,
      yearly: 399.99,
      currency: "JD",
    },
  },
];

const seedDB = async () => {
  try {
    // Connect to MongoDB with updated connection options
    await mongoose.connect("mongodb://localhost/ejazah_subscriptions");
    console.log("Connected to MongoDB");

    // Clear existing plans
    const deleteResult = await Subscription.deleteMany({});
    console.log(
      `Cleared ${deleteResult.deletedCount} existing subscription plans`
    );

    // Insert new plans
    const insertedPlans = await Subscription.insertMany(plans);
    console.log(
      `Successfully seeded ${insertedPlans.length} subscription plans`
    );

    // Close the connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
