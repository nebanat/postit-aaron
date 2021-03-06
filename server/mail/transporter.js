import nodemailer from 'nodemailer';

require('dotenv').config();

/**
 * @returns { object } nodemailer - returns nodemailer transport protocol
 */
export default nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

