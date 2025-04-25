const Subscription = require("../models/Subscription");
const { validationResult } = require("express-validator");

exports.createSubscription = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { planName, description, features, pricing } = req.body;

    const existingPlan = await Subscription.findOne({ planName });
    if (existingPlan) {
      return res.status(400).json({
        success: false,
        message: "Subscription plan with this name already exists",
      });
    }

    // Create new subscription
    const subscription = new Subscription({
      planName,
      description,
      features,
      pricing,
    });

    // Save to database
    await subscription.save();

    res.status(201).json({
      success: true,
      message: "Subscription plan created successfully",
      data: subscription,
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: subscriptions.length,
      data: subscriptions,
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription plan not found",
      });
    }

    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    console.error("Error fetching subscription:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const subscription = await Subscription.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription plan not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscription plan updated successfully",
      data: subscription,
    });
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription plan not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscription plan deactivated successfully",
    });
  } catch (error) {
    console.error("Error deactivating subscription:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
