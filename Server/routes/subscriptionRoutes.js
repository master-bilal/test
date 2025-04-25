const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");
const {
  validateSubscription,
} = require("../middleware/validators/subscriptionValidator");

router.post(
  "/create-subscription",
  validateSubscription,
  subscriptionController.createSubscription
);

router.get("/getAll-subscription", subscriptionController.getAllSubscriptions);

// router.get("/update-subscription/:id", subscriptionController.getSubscription);

router.put(
  "/update-subscription/:id",
  validateSubscription,
  subscriptionController.updateSubscription
);

// Delete (deactivate) a subscription plan
router.delete(
  "/delete-subscription/:id",
  subscriptionController.deleteSubscription
);

module.exports = router;
