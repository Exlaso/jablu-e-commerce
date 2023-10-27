import { Resend } from 'resend';

const resend = new Resend('re_f6MgLbvq_NnG7zXnhfSqzJ7y8jgpLPTGr');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'vedantbhavsar67@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});