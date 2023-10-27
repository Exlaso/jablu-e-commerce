import { GoogleAccountBody } from "@/lib/Interfaces";
import { Account, Awaitable, NextAuthOptions, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn(params: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
    }): Promise<any> {
      if (params.account?.provider === "google") {
        const profile: {
          email: string;
          given_name: string;
          name: string;
          picture: string;
        } = params.profile as {
          email: string;
          given_name: string;
          name: string;
          picture: string;
        };
        
        const body: GoogleAccountBody = {
          email: profile?.email,
          given_name: profile?.given_name,
          key: process.env.JWT_KEY as string,
          name: profile?.name,
          picture: profile?.picture,
        };
        
        const googgleaccountres = await fetch(
          `${process.env.NEXTAUTH_URL}/api/GoogleAccount`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        const jsonres: { message: string; error: boolean } =
          await googgleaccountres.json();

        if (!jsonres.error) {
          cookies().set("jablu_jwt_token", jsonres.message, {
            path: "/",
            maxAge: 605800,
          });
          
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/Auth/Signin",
  },
};
