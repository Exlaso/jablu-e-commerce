
export const EmailVerificationTemplate = ({
  Firstname,
  verifyurl,
}: {
  Firstname: string;
  verifyurl: string;
}):JSX.Element => (
  <div className="flex flex-col gap-3 p-5">
    <h1 className="text-2xl font-bold">Dear {Firstname},</h1>
    <p className="flex">
      Thank you for choosing Jablu.in for your online services. To ensure the
      security of your account and to enable us to keep you updated with the
      latest offers and important information, we kindly request you to verify
      your email address. Email verification is a quick and straightforward
      process that helps us confirm your identity and maintain the integrity of
      our platform.
    </p>
    <p>
      To verify your email, please click on the verification link provided
      below:
    </p>
    <a
      href={verifyurl}
      className="underline text-blue-400"
    >
      {verifyurl}
    </a>
    <p>
      By confirming your email address, you will have uninterrupted access to
      all the features and benefits that Jablu.in has to offer. If you did not
      request this verification, or if you believe this email was sent to you in
      error, please disregard it. Your account&rsquo;s security is our priority, and
      we appreciate your cooperation in this matter.
    </p>
    <p>
      Thank you for choosing Jablu.in , and we look forward to serving you. If
      you have any questions or require assistance, please feel free to contact
      our support team at [Exlaso53@gmail.com].
    </p>
    Best regards,
    <br />
    Vedant Bhavsar
    <br />
    Customer Support Team
    <br />
    <div className="jablutext text-6xl flex">
      <div>Jablu</div>
      <div>.</div>
      <div>in</div>
    </div>
  </div>
);
