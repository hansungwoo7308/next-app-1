// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import * as S from "../../styles/components/Slider.styled";

const Test = ({ direction, move, onTest }) => {
  //   const [move, setMove] = useState(0); // 이동거리
  // const [direction, setDirection] = useState(); // 방향
  //   const [init, setInit] = useState();

  const slider = useRef();

  console.log("rendering the Test.");
  console.log("move : ", move);
  //   console.log("slider : ", slider);

  useEffect(() => {});

  return (
    <S.Slider
      className="slider"
      ref={slider}
      // move={move}
      style={{ transform: `translate(${direction * 20}%)` }}
      onTransitionEnd={() => {
        console.log("asdasdad");
        slider.current.style.transition = `none`;

        if (direction === -1) {
          slider.current.append(slider.current.firstChild);
        }

        if (direction === 1) {
          slider.current.prepend(slider.current.lastChild);
        }

        // const sliderTest = document.querySelector(".slider");
        // // console.log("slider : ", sliderTest);
        // if (direction === -1) {
        //   //   sliderTest.appendChild(sliderTest.firstChild);
        //   //   slider.current.appendChild(slider.current.firstChild);
        // }
        // if (direction === 1) {
        //   //   sliderTest.prepend(sliderTest.lastChild);
        //   //   slider.current.prepend(slider.current.lastChild);
        // }
        // const sliderTest = document.querySelector(".slider");
        slider.current.style.transform = `translate(0)`;
        setTimeout(() => {
          // slider.current.style.transform = `translate(${move}%)`;
          slider.current.style.transition = ``;
        });
      }}
    >
      <section>section 1</section>
      <section>section 2</section>
      <section>section 3</section>
      <section>section 4</section>
      <section>section 5</section>
    </S.Slider>
  );
};

export default Test;
