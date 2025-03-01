"use client";
import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { API_UpdatePassword_Body } from "@/lib/Interfaces";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { toast } from "sonner";
import { MdOutlinePassword } from "react-icons/md";

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
  const [isdarkmode, setisdarkmode] = useState<boolean>(true);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    const changeHandler = () => setisdarkmode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener("change", changeHandler);

    setisdarkmode(darkModeMediaQuery.matches);

    return () =>
      darkModeMediaQuery.removeEventListener("change", changeHandler);
  }, [setisdarkmode]);
  const ValidatePassword = (e: string) => e.length < 8;
  const handlePasswordupdateForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonloading(true);
    if (ValidatePassword(Password)) {
      setError(true);
      toast.error("Password length Must be more than 8 characters");
      setButtonloading(false);
    } else {
      if (Password !== ConfirmPassword) {
        toast.error("Password and Confirm Password does not match");
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
            if (data.error) {
              toast.error(data.message);
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
      <>
        <Typography
          variant={"h1"}
          color={isdarkmode ? "white" : "black"}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {" "}
          Update Password on
        </Typography>
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
                <MdOutlinePassword className={"h-6 w-6"}></MdOutlinePassword>
              </span>
              <p>
                <strong>Congratulations</strong>, your password on Jablu.in has
                been successfully updated.
              </p>
              <p>
                Your account is now more secure than ever. If you didn&apos;t
                make this change, please contact our support team immediately
                for assistance.
              </p>
              <p>
                Thank you for choosing Jablu.in for your online shopping needs.
              </p>
            </motion.div>
          ) : (
            <motion.form
              animate={{ x: "0%" }}
              exit={{ x: "-110%" }}
              initial={{ x: "0%" }}
              onSubmit={handlePasswordupdateForm}
              className={"flex flex-col  gap-10 w-full"}
            >
              <Input
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                label="New Password"
                type="password"
                crossOrigin={""}
                variant={"static"}
                color={isdarkmode ? "white" : "black"}
                value={Password}
                error={Error}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
              <Input
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                label="Confirm Password"
                crossOrigin={""}
                variant={"static"}
                color={isdarkmode ? "white" : "black"}
                value={ConfirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordmatcherror(false);
                }}
                type="password"
                error={Passwordmatcherror}
              />
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                disabled={buttonloading}
                type="submit"
                className={
                  "p-3 w-full flex gap-2 justify-center items-center rounded-xl text-sm"
                }
              >
                {buttonloading ? (
                  <Spinner
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className={"h-4 w-4"}
                  />
                ) : null}

                {buttonloading ? "Loading..." : "Update"}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
        <Typography
          variant={"paragraph"}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Changed Password?{"  "}
          <Link href={`/Auth/Signin?callbackUrl=/}`} className={"underline"}>
            Sign in here
          </Link>
        </Typography>
      </>
    </>
  );
};

export default NewPassword;
