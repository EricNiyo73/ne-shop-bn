const otpEmailTemplate = (user: string, otpCode: string) =>
  `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin:10px">
    <h2 style="">Hi ${user},</h2>
    <p>Welcome to NE Shop NE Shop  To ensure the security of your account, please use the following OTP code to verify your login:</p>
    <p><strong>OTP Code:</strong> ${otpCode}</p>
    <p>If you have any questions or concerns, please don't hesitate to contact our support .</p>
    <p>Best regards,</p>
    <p>NE Shop NE Shop </p>
  </div>
`
export default otpEmailTemplate
