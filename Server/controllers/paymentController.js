const Invoice = require("../models/invoice");
const User = require("../models/user");

exports.createInvoice = async (req, res) => {
  try {
    const { courseId, courseTitle, amount, orderId, paymentDetails } = req.body;
    const userId = req.userId; // احصل عليه من middleware المصادقة

    // أنشئ الفاتورة
    const invoice = await Invoice.create({
      userId,
      courseId,
      courseTitle,
      amount,
      orderId,
      paymentDetails,
    });

    // أضف الكورس للمستخدم
    await User.findByIdAndUpdate(userId, {
      $addToSet: { courses: courseId },
    });

    res.status(201).json(invoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "فشل في إنشاء الفاتورة" });
  }
};
