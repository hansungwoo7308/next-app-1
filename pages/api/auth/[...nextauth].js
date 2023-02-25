import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
// import jwt from "jsonwebtoken";
// import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialProvider({
      // id: 'something', // CredentialProviders 중에서 CredentialProvider 를 특정하기 위한 프로퍼티
      name: "Credentials", // Sign in with "Credentials"
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      }, // you can set the html input tag attribute
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
    async jwt(params) {
      // async jwt({ token, account }) {
      // 토큰(token.userRole)에 역할 설정을 이 콜백에서 한다.
      // 그러기 위해서는, 데이터베이스와 연결 후에 역할을 알아와야 한다.

      // 서버에서 토큰을 만들고 나서 클라이언트에 토큰을 리턴?
      // 토큰의 일부정보만 볼 수 있다?
      console.log("");
      console.log("\x1b[33m/api/auth/[...nextauth]/callbacks/jwt\x1b[0m");
      // console.log("account : ", account);
      console.log("params : ", params);

      // Persist the OAuth access_token to the token right after signin
      // if (account) {
      //   // token.accessToken = account.access_token;
      //   // token.role = "adminPersist";
      //   token.role = account?.role;
      // }
      if (params.user?.role) {
        params.token.role = params.user.role;
      }

      // console.log("token : ", token);
      console.log("");

      return params.token;
    },
    async session({ session, token, user }) {
      // session.user.role = user.role;
      console.log("");
      console.log("\x1b[33m/api/auth/[...nextauth]/callbacks/session\x1b[0m");
      console.log("token : ", token);
      console.log("session : ", session);
      // console.log("user : ", user);

      // if (session.user) {
      //   // Send properties to the client, like an access_token from a provider.
      //   // session.accessToken = token.accessToken;
      //   session?.user?.role = user?.role;
      // }
      if (session.user) session.user.role = user?.role;
      console.log("session : ", session);

      // console.log("session : ", session);
      // console.log("user : ", user);
      console.log("");

      return session; // useSession hook 의 returned value
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

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
