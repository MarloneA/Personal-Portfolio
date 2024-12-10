'use server';
import nodemailer from 'nodemailer';


type SmtpOptions = {
    to: string,
    subject: string,
    html: string,
    from: string,
    files: any
}

export async function sendMail({ to, subject, html, from, files } : SmtpOptions) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
        mailFrom: to,
      });
      await transporter.sendMail({ 
        from: to, 
        to:process.env.EMAIL_TO, 
        subject, 
        html,  
        attachments: files.map((file) => ({
            filename: file.filename,
            content: Buffer.from(file.content, 'base64'), // Convert back from Base64 if sent as such
            contentType: file.contentType,
        })) 
    });
    } catch (error) {
      throw new Error(error);
    }
  };
  