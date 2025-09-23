import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send OTP email
const sendOTPEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"IAAII" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Password Reset OTP - IAAII",
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <!-- Header -->
          <div style="background-color: #1b95c8; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">IAAII</h1>
          </div>

          <!-- Content -->
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; font-size: 20px; margin-bottom: 20px;">Password Reset Request</h2>
            
            <!-- OTP Box -->
            <div style="background-color: #f8f9fa; border: 2px dashed #1b95c8; padding: 20px; margin: 20px 0; text-align: center; border-radius: 10px;">
              <p style="margin: 0; color: #666; font-size: 14px;">Your OTP Code</p>
              <div style="font-size: 32px; font-weight: bold; color: #1b95c8; letter-spacing: 5px; margin: 10px 0;">
                ${otp}
              </div>
              <p style="margin: 0; color: #666; font-size: 14px;">Valid for 10 minutes</p>
            </div>

            <!-- Instructions -->
            <div style="margin: 20px 0; color: #666;">
              <p style="margin-bottom: 10px;">To complete the password reset process:</p>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 5px;">Enter this OTP code on the verification page</li>
                <li style="margin-bottom: 5px;">Create your new password</li>
                <li style="margin-bottom: 5px;">Start enjoying IAAII again!</li>
              </ol>
            </div>

            <!-- Warning -->
            <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; color: #856404;">
              ⚠️ If you didn't request this password reset, please ignore this email or contact our support team.
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 12px; margin: 5px 0;">This is an automated message, please do not reply.</p>
              <p style="color: #666; font-size: 12px; margin: 5px 0;">© ${new Date().getFullYear()} IAAII. All rights reserved.</p>
              <p style="color: #666; font-size: 12px; margin: 5px 0;">
                Need help? Contact us at 
                <span style="color: #1b95c8; font-weight: bold;">support@IAAII.com</span>
              </p>
            </div>
          </div>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
};

const sendFormEmail = async (formData) => {
  try {
    const emailContent = `
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333333;
          text-align: center;
        }
        p {
          color: #555555;
          line-height: 1.6;
        }
        .highlight {
          color: #f47b20;
          font-weight: bold;
        }
      </style>
      <div class="container">
        <h2>Form Submission Details</h2>
        <p><strong>First Name:</strong> <span class="highlight">${formData.firstName}</span></p>
        <p><strong>Family Name:</strong> <span class="highlight">${formData.familyName}</span></p>
        <p><strong>Gender:</strong> <span class="highlight">${formData.gender}</span></p>
        <p><strong>Email Address:</strong> <span class="highlight">${formData.email}</span></p>
        <p><strong>Country:</strong> <span class="highlight">${formData.country}</span></p>
        <p><strong>Mobile:</strong> <span class="highlight">${formData.mobile}</span></p>
        <p><strong>Job Title:</strong> <span class="highlight">${formData.jobTitle}</span></p>
        <p><strong>Job Classification:</strong> <span class="highlight">${formData.jobClassification}</span></p>
        <p><strong>Highest Qualification:</strong> <span class="highlight">${formData.highestQualification}</span></p>
        <p><strong>Department:</strong> <span class="highlight">${formData.department}</span></p>
        <p><strong>Institution:</strong> <span class="highlight">${formData.institution}</span></p>
        <p><strong>Area(s) of Research Interest:</strong> <span class="highlight">${formData.researchInterests}</span></p>
        <p><strong>Subject Classification:</strong> <span class="highlight">${formData.subjectClassification}</span></p>
        <p><strong>Area(s) of Specialization:</strong> <span class="highlight">${formData.areasOfSpecialization}</span></p>
        <p><strong>Number of Years in Academia:</strong> <span class="highlight">${formData.yearsInAcademia}</span></p>
        <p><strong>Institution of your contact person:</strong> <span class="highlight">${formData.contactPersonInstitution}</span></p>
        <p><strong>Name of contact person from the mentioned institution:</strong> <span class="highlight">${formData.contactPersonName}</span></p>
        <p><strong>Confidentiality Consent:</strong> <span class="highlight">${formData.confidentialityConsent}</span></p>
        <p><strong>Area(s) for Collaboration:</strong> <span class="highlight">${formData.areasForCollaboration}</span></p>
        <p><strong>Membership:</strong> <span class="highlight">${formData.membershipType}</span></p>
      </div>
    `;

    await transporter.sendMail({
      from: `"IAAII" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: "Form Submission - IAAII",
      html: emailContent,
    });
    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
};

export { sendOTPEmail, sendFormEmail };
