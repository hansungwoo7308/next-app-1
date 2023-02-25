import { getSession } from "next-auth/react";

export const requireAuth = async (context: any, callback: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return callback();
};
