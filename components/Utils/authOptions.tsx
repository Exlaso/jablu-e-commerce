import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req)  {
        credentials as {
          email: string;
          password: string;
        };

        const res = await fetch("http://localhost:3000/api/Signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const data = await res.json();

        if (data.error) {
          throw new Error(data.message);
        } else {
          return data.data;
        }
        // confirmed users
        // return { id: "1", name: "Exlaso", email: "Exlaso@email.com" };
      },
    }),
  ],
  pages: {
    signIn: "/Signin",
  },
};
