const statusDisactivation = (user: string, description: string) =>
  `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin:10px">
      <h2 style="">Dear ${user},</h2>
      <p>We regret to inform you that you have been disabled from using e-commerce NE Shop website because of the following reasons:</p>
      <p>${description}</p>
      <p>If you have any questions or concerns, please don't hesitate to contact our support .</p>
      <p>Best regards,</p>
      <p>NE Shop NE Shop </p>
    </div>
  `
export default statusDisactivation
