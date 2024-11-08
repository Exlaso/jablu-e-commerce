"use client";
import { FunctionComponent, useState } from "react";
import { message } from "@/utils/Senddatatotg";
import { toast } from "sonner";
import { Input } from "@material-tailwind/react";

interface typesforpage {}

const SupportPage: FunctionComponent<typesforpage> = () => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [query, setquery] = useState<string>("");
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Query Submitted");
    message(`Name: ${name}  Email: ${email}  Query: ${query}`);
    setname("");
    setemail("");
    setquery("");
  };
  return (
    <main className={"py-[15vh] flex flex-col justify-center items-center"}>
      <h1 className={"text-4xl font-bold"}>Support Page</h1>
      <p className={"text-lg mt-4"}>
        If you have any questions or issues, please contact us at
        support@jablu.exlaso.in
      </p>
      <section className={"mt-8"}>
        <h2 className={"text-2xl font-bold"}>Submit a Query</h2>
        <form className={"mt-4 space-y-4"} onSubmit={handlesubmit}>
          <Input
            crossOrigin={" "}
            variant={"static"}
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Your Name"
            className={"w-full p-2 border border-gray-300 rounded"}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <Input
            crossOrigin={" "}
            variant={"static"}
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className={"w-full p-2 border border-gray-300 rounded"}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <Input
            crossOrigin={" "}
            variant={"static"}
            onChange={(e) => setquery(e.target.value)}
            value={query}
            placeholder="Your Query"
            className={"w-full p-2 border border-gray-300 rounded"}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <button
            type="submit"
            className={"px-4 py-2 bg-blue-500 text-white rounded"}
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default SupportPage;
