import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "../../styles/pages/blog.styled";

const Blog = () => {
  const router = useRouter();

  console.log("");
  console.log("\x1b[32m/blog\x1b[0m");
  console.log("");
  return (
    <S.Container>
      <S.Layout>
        <h1>Blog</h1>
      </S.Layout>
    </S.Container>
  );
};

export default Blog;
