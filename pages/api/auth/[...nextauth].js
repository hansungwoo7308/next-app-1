import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { verify } from "jsonwebtoken";

export const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),

    // ...add more providers here
    CredentialProvider({
      // id: 'something', // CredentialProviders 중에서 CredentialProvider 를 특정하기 위한 프로퍼티
      name: "Credentials", // Sign in with "Credentials"
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
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
        const { email, password } = credentials;
        console.log("email : ", email);
        console.log("password : ", password);

        // 가상의 사용자가 로그인하도록 구현하기 위해서, 사용자를 만든다.
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        const user = { id: "1", email };

        // req.body === credentials = {csrfToken, username, password}
        // const { username, password } = credentials
        // const { username, password } = req.body;
        // console.log("backend  credentials   request.body : ", req.body);

        console.log("");

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  // 콜백스는 언제 실행?
  callbacks: {
    async jwt({ token, account }) {
      // 서버에서 토큰을 만들고 나서 클라이언트에 토큰을 리턴?
      console.log("");
      console.log("\x1b[33m/api/auth/[...nextauth]/callbacks/jwt\x1b[0m");
      console.log("token : ", token);
      console.log("account : ", account);
      console.log("");

      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      console.log("");
      console.log("\x1b[33m/api/auth/[...nextauth]/callbacks/session\x1b[0m");
      console.log("session : ", session);
      console.log("token : ", token);
      console.log("user : ", user);
      console.log("");

      return session; // useSession hook 의 returned value
    },
  },

  pages: {
    // signIn: "/auth/signin",
    // signin: "/auth/signin",
  },
};

export default NextAuth(authOptions);
