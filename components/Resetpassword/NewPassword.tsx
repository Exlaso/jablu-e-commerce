"use client";
import { FormEvent, FunctionComponent, useState } from "react";
import Authdiv from "../Authdiv";
import JabluTextLogo from "../Utils/Jablulogo";
import { TextField } from "@mui/material";
import { API_UpdatePassword_Body } from "@/lib/Interfaces";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MyAlert } from "../Utils/Myalert";
import PasswordIcon from "@mui/icons-material/Password";

interface NewPasswordProps {
  email: string;
  token: string;
}

const NewPassword: FunctionComponent<NewPasswordProps> = ({ email, token }) => {
  const [Password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);
  const [Passwordmatcherror, setPasswordmatcherror] = useState<boolean>(false);
  const [buttonloading, setButtonloading] = useState<boolean>(false);
  const [Success, setSuccess] = useState<boolean>(false);
  const [MainError, setMainError] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const ValidatePassword = (e: string) => e.length < 8;
  const handlePasswordupdateForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonloading(true);
    if (ValidatePassword(Password)) {
      setError(true);
      setButtonloading(false);
    } else {
      if (Password !== ConfirmPassword) {
        setPasswordmatcherror(true);
        setButtonloading(false);
      } else {
        const data: API_UpdatePassword_Body = {
          user_password: Password,
          user_email: email,
          token: token,
        };
        fetch("/api/UpdatePassword", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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
    }
  };

  return (
    <>
      {MainError && (
        <MyAlert
          open={open}
          setOpen={setOpen}
          message={MainError}
        />
      )}
      <Authdiv>
        <div className="flex gap-2 flex-col">
          <div className="text-2xl font-semibold mb-2 flex gap-3 items-center">
            Update Password on <JabluTextLogo className="text-[1.8em] ml-3" />
          </div>
          <p className="mb-4">
            Ready to strengthen your account&apos;s security? Update your password
            here and keep your Jablu.in shopping experience safe and sound.
          </p>
        </div>
        <div className="overflow-hidden">
          <AnimatePresence>
            {Success ? (
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: "100%" }}
                exit={{ x: "0%" }}
                transition={{
                  damping: 0,
                }}
              >
                <span className="flex justify-center text-green-500">
                  {" "}
                  <PasswordIcon fontSize="large"></PasswordIcon>
                </span>
                <p>
                  <strong>Congratulations</strong>, your password on Jablu.in has been
                  successfully updated.
                </p>
                <p>
                  Your account is now more secure than ever. If you didn&apos;t make
                  this change, please contact our support team immediately for
                  assistance.
                </p>
                <p>
                  Thank you for choosing Jablu.in for your online shopping
                  needs.
                </p>
              </motion.div>
            ) : (
              <motion.form
                animate={{ x: "0%" }}
                exit={{ x: "-110%" }}
                initial={{ x: "0%" }}
                onSubmit={handlePasswordupdateForm}
                className="w-full flex flex-col gap-3"
              >
                <TextField
                  label="New Password"
                  type="password"
                  value={Password}
                  error={Error}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  helperText={"Password Must Be greater than 8 Characters"}
                />
                <TextField
                  label="Confirm Password"
                  value={ConfirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordmatcherror(false);
                  }}
                  type="password"
                  error={Passwordmatcherror}
                  helperText={Passwordmatcherror && "Password Must Match"}
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
                  {buttonloading ? "Loading..." : "Update"}
                </motion.button>
              </motion.form>
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

export default NewPassword;
