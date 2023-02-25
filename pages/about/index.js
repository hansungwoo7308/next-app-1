import { getSession, useSession } from "next-auth/react";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdPlace } from "react-icons/md";

import * as S from "../../styles/pages/about.styled";

import { requireAuth } from "../../src/utils/requireAuth";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("session : ", session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const About = ({ session }) => {
  const [index, setIndex] = useState(0);
  const [initialFocus, setInitialFocus] = useState();
  // const { data: session2 } = useSession();

  useEffect(() => {
    // Read
    const list = document.querySelectorAll(".tabMenu");
    const focus = document.querySelector(".focus");
    const nextElementOfFocus = focus.nextElementSibling;

    // Update
    setInitialFocus(nextElementOfFocus.getBoundingClientRect().width);
    list.forEach((item, index) => {
      item.addEventListener("click", () => {
        // e.preventDefault();

        // 인덱스 설정
        setIndex(index);

        // 포커스 설정
        const newLeft = list[index].offsetLeft;
        const newWidth = list[index].offsetWidth;
        focus.style.left = newLeft + "px";
        focus.style.width = newWidth + "px";
      });
    });
  }, []);

  // logs
  console.log("");
  console.log("\x1b[32m/about\x1b[0m");
  // console.log("session : ", session);
  // console.log("session2 : ", session2);
  console.log("");

  return (
    <S.Container>
      <S.Layout>
        <S.Image>
          <Image
            src="/images/Profile.JPG"
            width={200}
            height={200}
            alt="Profile.jpg"
          />
        </S.Image>
        <S.Info>
          <div>
            <h3 className="introduce">I am Frontend Developer</h3>
            <h1 className="name">SUNG WOO, Han.</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eaque impedit quasi id repudiandae deleniti quos aspernatur
              reiciendis! Nesciunt, at ipsam a voluptate veniam nihil unde
              pariatur atque! Praesentium, in.
            </p>
          </div>
          <div>
            <h3 className="information">Contact Information</h3>
            <ul>
              <li>
                <FaPhone />
                <span>Phone : 010-7308-2908</span>
              </li>
              <li>
                <GoMail />
                <span>Email : hsw7308@naver.com</span>
              </li>
              <li>
                <MdPlace />
                <span>Place : Seoul in Korea</span>
              </li>
            </ul>
          </div>
        </S.Info>
      </S.Layout>
      <S.Layout>
        <S.Skills>
          <h3>Professional Skills</h3>
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>
                Javascript
                <div className="javascript"></div>
              </li>
              <li>
                React JS
                <div className="reactjs"></div>
              </li>
              <li>
                Next JS
                <div className="nextjs"></div>
              </li>
              <li>
                Redux JS
                <div className="reduxjs"></div>
              </li>
              <li>
                Styled-Components
                <div className="styledComponents"></div>
              </li>
            </ul>
          </div>
          <div>
            <h4>Backend</h4>
          </div>
        </S.Skills>
      </S.Layout>
      <S.Layout>
        <S.Tab initialFocus={initialFocus}>
          <div className="tabMenus">
            <div className="focus"></div>
            <div
              className={index === 0 ? "tabMenu active" : "tabMenu"}
              // onClick={(e) => {
              //   return handleClick(1);
              // }}
            >
              <h1>tabbbbbbbbbbbb 1</h1>
            </div>
            <div
              className={index === 1 ? "tabMenu active" : "tabMenu"}
              // onClick={() => handleClick(2)}
            >
              <h1>tabb 2</h1>
            </div>
            <div
              className={index === 2 ? "tabMenu active" : "tabMenu"}
              // onClick={() => handleClick(3)}
            >
              <h1>tab 3</h1>
            </div>
          </div>
          <div className="tabContents">
            <div className={index === 0 ? "tabContent active" : "tabContent"}>
              <h3>tab 1 content</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              voluptatem amet voluptatibus ipsa vitae nemo asperiores sapiente
              rem impedit numquam voluptatum culpa cum veniam, sunt esse!
              Provident dicta excepturi suscipit!
            </div>
            <div className={index === 1 ? "tabContent active" : "tabContent"}>
              <h3>tab 2 content</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              voluptatem amet voluptatibus ipsa vitae nemo asperiores sapiente
              rem impedit numquam voluptatum culpa cum veniam, sunt esse!
              Provident dicta excepturi suscipit!
            </div>
            <div className={index === 2 ? "tabContent active" : "tabContent"}>
              <h3>tab 3 content</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              voluptatem amet voluptatibus ipsa vitae nemo asperiores sapiente
              rem impedit numquam voluptatum culpa cum veniam, sunt esse!
              Provident dicta excepturi suscipit!
            </div>
          </div>
        </S.Tab>
      </S.Layout>
    </S.Container>
  );
};

export default About;
