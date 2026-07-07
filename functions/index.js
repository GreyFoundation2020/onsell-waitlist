const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {defineSecret} = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const {Resend} = require("resend");
const RESEND_API_KEY = defineSecret("RESEND_API_KEY");

exports.sendFeedbackEmail = onDocumentCreated(
    {
      document: "feedback/{feedbackId}",
      secrets: [RESEND_API_KEY]},
    async (event) => {
      if (!event.data) {
        logger.error("No Firestore document found.");
        return;
      }
      const data = event.data.data();
      logger.info("New feedback received:", data);
      const resend = new Resend(RESEND_API_KEY.value());

      try {
        const userEmail = await resend.emails.send({
          from: "OnSell <onboarding@resend.dev>",
          to: data.email,
          subject: "🎉 Thank You for Contacting OnSell",
          html: `

        <div style="font-family:Arial,sans-serif;padding:30px;max-width:700px;
        margin:auto">
            <h2 style="color:#0B8F7A">Hello ${data.name},</h2>

            <p>Thank you for contacting <strong>OnSell</strong>.</p>

            <p>
              We have successfully received your feedback.
              Our team will review it and respond if necessary.
            </p>

            <hr>

            <h3>Your Submission</h3>

            <p><strong>Subject:</strong> ${data.subject}</p>

            <p><strong>Message:</strong></p>

            <p>${data.message}</p>

            <br>

            <p>
              We appreciate your support as we build the future
              marketplace for buying and selling in Nigeria.
            </p>

            <br>

            <p>Regards,</p>

            <h3 style="color:#0B8F7A">
              Team OnSell
            </h3>

          </div>
        `,
        });
        logger.info("User email sent", userEmail);
        const adminEmail = await resend.emails.send({
          from: "OnSell <onboarding@resend.dev>",
          to: "gregoryudofa@gmail.com",
          subject: "📩 New Feedback Received",

          html: `
        <div style="font-family:Arial;padding:30px">

        <h2>New Feedback Received</h2>

        <table cellpadding="8">

        <tr>

        <td><strong>Name</strong></td>

        <td>${data.name}</td>

        </tr>

        <tr>

        <td><strong>Email</strong></td>

        <td>${data.email}</td>

        </tr>

        <tr>

        <td><strong>Phone</strong></td>

        <td>${data.phone}</td>

        </tr>

        <tr>

        <td><strong>City</strong></td>

        <td>${data.city}</td>

        </tr>

        <tr>

        <td><strong>Subject</strong></td>

        <td>${data.subject}</td>

        </tr>

        </table>

        <br>

        <strong>Message</strong>

        <p>${data.message}</p>

        </div>
        `,
        });
        logger.info("Admin email sent", adminEmail);
        return;
      } catch (error) {
        logger.error("Resend Error:", error);
        return;
      }
    }
    ,

);

