import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "../../../lib/db";
import { assertNotUndefined } from "../../../lib/env-utils";

export default NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: assertNotUndefined(
        process.env.GOOGLE_CLIENT_ID,
        "env GOOGLE_CLIENT_ID missing"
      ),
      clientSecret: assertNotUndefined(
        process.env.GOOGLE_CLIENT_SECRET,
        "env GOOGLE_CLIENT_SECRET missing"
      )
    })
  ]
});
