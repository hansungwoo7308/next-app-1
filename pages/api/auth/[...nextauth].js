import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = {
  // session: {
  //   strategy: "jwt",
  // },

  providers: [
    CredentialProvider({
      name: "Credentials", // Sign in with "Credentials"
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "username" },
      //   password: {
      //     label: "Password",
      //     type: "password",
      //     placeholder: "password",
      //   },
      // }, // you can set the html input tag attribute
      async authorize(credentials, req) {
        console.log("");
        console.log(
          "\x1b[33m/api/auth/[...nextauth]/providers/credentials/authorize\x1b[0m"
        );
        if (!credentials) {
          console.log("credentials do not exist.");
        }
        console.log("credentials : ", credentials);

        const { email, password } = credentials;
        if (email === "tom@tom" && password === "123") {
          return {
            id: "1",
            name: "tom",
            email: email,
            role: "admin",
          };
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Oauth // Persist the OAuth access_token to the token right after signin
      // if (params.account) {
      //   params.token.accessToken = params.account.access_token;
      // }

      console.log("");
      console.log("\x1b[33m/api/auth/callbacks/jwt\x1b[0m");
      // console.log("token : ", token);
      // console.log("user : ", user);
      if (user) {
        token.role = user.role;
      }
      // console.log("token : ", token);
      console.log("");

      return token;
    },
    async session({ session, token }) {
      console.log("");
      console.log("\x1b[33m/api/auth/callbacks/session\x1b[0m");
      // console.log("token : ", token);
      // assign the roles
      if (session.user) {
        session.user.role = token.role;
      }
      console.log("session : ", session);
      console.log("");

      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },

  // jwt: {
  //   async encode({ secret, token }) {
  //     return jwt.sign(token, secret);
  //   },
  //   async decode({ secret, token }) {
  //     return jwt.verify(token, secret);
  //   },
  // },

  // secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
