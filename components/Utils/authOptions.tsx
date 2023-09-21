import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const a: any = credentials;
        return { id: a.id, name: a.name, email: a.email };
      },
    }),
  ],

  pages: {
    signIn: "/Auth/Signin",
  },
};
