import Axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "../../styles/pages/admin.styled";

const Admin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  // const checkLogin = () => {
  //   Axios.get("/api/isLogin").then((res) => {
  //     if (res.status === 200 && res.data) {
  //       console.log("response : ", res);
  //       setIsLogin(true);
  //     } else {
  //       router.push("/auth/login");
  //     }
  //   });
  // };

  const handleLogout = () => {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/auth/login");
        // router.push("/");
      }
    });
  };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  return (
    <S.Container>
      <S.Layout>
        {isLogin && (
          <S.Admin>
            <S.Profile>
              <S.Image>
                <Image
                  src={
                    "https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177_960_720.jpg"
                  }
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                />
              </S.Image>
              <S.Info>
                <h5>Personal Infomation</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda vel obcaecati molestiae mollitia aliquam quasi
                  aliquid consectetur nulla cum inventore voluptatibus incidunt
                  rerum, odit a quo iusto adipisci! Mollitia, commodi!
                </p>
              </S.Info>
            </S.Profile>
            <S.Button className="button" onClick={handleLogout}>
              Logout
            </S.Button>
          </S.Admin>
        )}
      </S.Layout>
    </S.Container>
  );
};

export default Admin;
