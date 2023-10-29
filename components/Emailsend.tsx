export const EmailVerificationTemplate = ({
  Firstname,
  verifyurl,
}: {
  Firstname: string;
  verifyurl: string;
}): JSX.Element => (
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
      error, please disregard it. Your account&rsquo;s security is our priority,
      and we appreciate your cooperation in this matter.
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

export const ResetPassword = ({
  name,
  url,
}: {
  name: string;
  url: string;
}): JSX.Element => {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-4xl"> Dear {name},</h1>
      <p>
        We received a request to reset the password for your Jablu.in account.
        To complete the password reset process, please follow the instructions
        below:
      </p>
      <p>1. Click on the following link to reset your password:</p>
      <a
        href={url}
        className="underline"
      >
        {url}
      </a>
      <p>
        2. You will be directed to a page where you can create a new password.
        Please ensure that your new password is both secure and unique.
      </p>
      <p>
        3. After you&apos;ve successfully reset your password, you&apos;ll be able to log
        in to your Jablu.in account with your new credentials. If you did not
        initiate this password reset request, please disregard this email. Your
        account&apos;s security is important to us, and we recommend that you change
        your password if you suspect any unauthorized access. Thank you for
        using Jablu.in. If you have any questions or need further assistance,
        please don&apos;t hesitate to contact our support team at
        [Exlaso53@gmail.com].
      </p>
      <p>Best regards,</p>
      Jablu.in Support Team
    </main>
  );
};

export const AlertRegardingUpdatedPassword = ({
  name,
}: {
  name: string;
}): JSX.Element => {
  return (
    <main className="flex flex-col gap-3">
      <h1 className="text-4xl"> Dear {name},</h1>
      <p>
        We are writing to inform you that your password for your Jablu.in
        website account has been successfully updated. Your account is now
        secured with your new password.
      </p>
      <p>
        If you were the one who initiated this password change, there&apos;s no need
        to take any further action. Your account is now ready for use with the
        updated credentials.
      </p>
      <p>
        If you did not request this password change, or if you believe your
        website account&apos;s security has been compromised, please contact our
        support team immediately at [Support Email or Phone Number]. We take
        account security very seriously and will assist you in securing your
        account.
      </p>
      <p>
        Thank you for being a part of the Jablu.in website community. If you
        have any questions or need assistance with anything else related to our
        website, feel free to reach out to us at any time.
      </p>
      <p>Best regards,</p>
      <p>      Jablu.in Support Team
</p>
    </main>
  );
};
