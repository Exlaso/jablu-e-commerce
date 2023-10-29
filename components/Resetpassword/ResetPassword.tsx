"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Authdiv from "../Authdiv";
import JabluTextLogo from "../Utils/Jablulogo";
import { MyAlert } from "../Utils/Myalert";
import { AnimatePresence, motion } from "framer-motion";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";

const ResetPassword = ({ uperror }: { uperror: string }) => {
  const [Email, setEmail] = useState<string>("");
  const [error, seterror] = useState<string>("");
  const [MainError, setMainError] = useState(uperror);
  const [open, setOpen] = useState<boolean>(!!uperror);
  const [buttonloading, setButtonloading] = useState<boolean>(false);
  const [Success, setSuccess] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seterror("");

    setEmail(e.target.value);
  };
  const Validateemail = (e: string) =>
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e);

  const handleEmailsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setButtonloading(true);
    e.preventDefault();

    if (Validateemail(Email)) {
      seterror("Invalid Email Address");
      setButtonloading(false);
    } else {
      fetch(`/api/SendResetMail?email=${Email.toLowerCase()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            setMainError(data.message);
            setOpen(true);
          } else {
            setSuccess(true);
          }
          setButtonloading(false);
        });
    }
  };

  return (
    <>
      <MyAlert
        open={open}
        setOpen={setOpen}
        message={MainError}
      />
      <Authdiv>
        <div className="flex gap-2 flex-col ">
          <div className="text-2xl font-semibold mb-2 flex gap-3 items-center">
            Reset Password on <JabluTextLogo className="text-[1.8em] ml-3" />
          </div>
          <p className="mb-4">
            Forgotten your password? No worries! Reset it easily and regain
            access to your account in seconds. Your shopping journey on Jablu.in
            awaits - get back on track now.
          </p>
        </div>
        <div className="overflow-hidden p-2  flex gap-2">
          <AnimatePresence>
            {!Success ? (
              <motion.form
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="w-full gap-6 flex flex-col shrink-0 "
                onSubmit={handleEmailsubmit}
              >
                <TextField
                  className="w-full"
                  id="outlined-basic"
                  value={Email}
                  onInput={handleEmailChange}
                  label="Email Address"
                  type="email"
                  required
                  variant="outlined"
                  helperText={error}
                  error={!!error}
                />
                <motion.button
                  disabled={buttonloading}
                  initial={{ scale: 1 }}
                  {...(!buttonloading && { whileTap: { scale: 0.95 } })}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue flex justify-center items-center gap-2"
                  type="submit"
                >
                  {buttonloading && (
                    <div className="border-4 border-blue-600 border-l-4 border-l-red-600 p-2 rounded-full animate-spin"></div>
                  )}
                  {buttonloading ? "Loading..." : "Submit"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: "100%" }}
                transition={{
                  damping: 0,
                }}
                className=" shrink-0  w-full"
              >
                <span className="flex justify-center">
                <MarkChatReadIcon fontSize="large" className="text-green-600" />
                </span>
                <p>
                  Great news! Your request for a password reset on Jablu.in has
                  been successfully processed, and an email has been sent to
                  your registered address.
                </p>
                <p>Please check your inbox for further instructions.</p>
                <p>
                  If you don&apos;t see the email, don&apos;t forget to also check your
                  spam folder.
                </p>
                <p>
                  We&apos;re here to assist you in getting back to a seamless
                  shopping experience at Jablu.in, so feel free to reach out if
                  you encounter any issues.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-1">
          Resetted you password?
          <Link
            href={"/Auth/Signin"}
            className="underline cursor-pointer"
          >
            Login Now
          </Link>
        </div>
      </Authdiv>
    </>
  );
};

export default ResetPassword;
