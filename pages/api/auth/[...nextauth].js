import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = {
  // session: {
  //   strategy: "jwt",
  // },

  providers: [
    CredentialProvider({
      // id: 'something', // CredentialProviders 중에서 CredentialProvider 를 특정하기 위한 프로퍼티
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
        // handler
        // database 연결을 여기서 하고 데이터 유효성 검사를 한다.
        // ajax (fetch, axios) 를 이용하여 backend(pages/api) 로 요청을 보내고
        // 응답을 받아와서 user object 에 담아서 리턴한다.
        console.log("");
        console.log(
          "\x1b[33m/api/auth/[...nextauth]/providers/credentials/authorize\x1b[0m"
        );

        // check the credentials
        if (!credentials) {
          console.log("credentials do not exist.");
        }
        console.log("credentials : ", credentials);

        // get the email and password from the credentials
        // console.log("email : ", email);
        // console.log("password : ", password);
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

        // database 조회
        // const foundUser = await ... // email verification
        // if(!foundUser) return ...
        // const result = await bcrypt.compare(password, foundUser.password) // password verification
        // if(!result) return ...

        // 데이터베이스에서 사용자를 검증해야하지만, 임시로 사용자를 로그인하도록 구현하기 위해서, 사용자를 만든다.
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "test", email };
        // // const user = { id: "1", email };
        // console.log("user : ", user);
        // console.log("");

        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
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
    // custom : /api/auth/signin 을 요청하면, 다음의 경로로 리다이렉션한다.
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
