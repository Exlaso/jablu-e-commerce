"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "../Utils/Button";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = () => {
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
      }}
      className=" p-8 rounded w-[70vw] max-md:w-full relative flex flex-col gap-6 "
    >
      <h2 className="text-2xl font-semibold mb-4 flex gap-3 items-center">
        Reset Password on
        <div className="jablutext text-4xl font-bold">
          <div>Jablu</div>
          <div>.</div>
          <div>in</div>
        </div>
      </h2>

      <form
        className="w-full"
        action="
  "
      >
        <TextField
        className="w-full"
          id="outlined-basic"
          label="Email Address"
          type="email"
          required
          variant="outlined"
          helperText=""
          error
        />
        <Button color="primary" >Submit</Button>
      </form>
    </motion.div>
  );
};

export default ResetPassword;
