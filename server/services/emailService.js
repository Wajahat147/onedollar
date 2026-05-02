const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: (process.env.EMAIL_USER || '').trim(),
    pass: (process.env.EMAIL_PASS || '').replace(/\s+/g, ''),
  },
});

// Verify connection configuration on startup
console.log('DEBUG EMAIL_USER:', process.env.EMAIL_USER);
console.log('DEBUG EMAIL_PASS length:', process.env.EMAIL_PASS?.length);
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  console.log('Testing SMTP Connection...');
  transporter.verify()
    .then(() => console.log('SMTP Connection verified. Ready to send emails.'))
    .catch(err => console.error('SMTP Connection failed:', err));
}

const sendOrderEmail = async (order) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('--- ORDER EMAIL SIMULATION ---');
    console.log(`To: Seller (${process.env.SELLER_EMAIL || 'admin@example.com'})`);
    console.log(`Subject: New Order #${order._id.toString().slice(-6).toUpperCase()}`);
    console.log(`Customer: ${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`);
    console.log(`Total: Rs. ${order.totalAmount}`);
    console.log(`Items: ${order.items.length} items`);
    console.log('------------------------------');
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.SELLER_EMAIL || process.env.EMAIL_USER,
    subject: `New Order Received - One Dollar #${order._id.toString().slice(-6).toUpperCase()}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #003ec7;">New Order Notification</h2>
        <p>You have received a new order from <strong>${order.shippingAddress.firstName} ${order.shippingAddress.lastName}</strong>.</p>
        <hr/>
        <p><strong>Order ID:</strong> #${order._id}</p>
        <p><strong>Total Amount:</strong> Rs. ${order.totalAmount}</p>
        <p><strong>Phone:</strong> ${order.shippingAddress.phone}</p>
        <p><strong>Address:</strong> ${order.shippingAddress.address}, ${order.shippingAddress.city}</p>
        <hr/>
        <p>View full details in your <a href="http://localhost:5000/admin.html">Admin Dashboard</a>.</p>
      </div>
    `,
  };

  console.log('Attempting to send email to:', mailOptions.to);

  try {
    await transporter.sendMail(mailOptions);
    console.log('Order confirmation email sent to seller.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendOrderEmail };
