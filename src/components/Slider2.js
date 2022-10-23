import { useLayoutEffect, useMemo } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import * as S from "../../styles/components/Slider.styled";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // 현재인덱스
  const [move, setMove] = useState(0); // 이동거리
  // const [direction, setDirection] = useState(); // 방향
  const slider = useRef(); // 슬라이더
  const prev = useRef(); // 이전버튼
  const next = useRef(); // 다음버튼
  const current = useRef(0);

  useEffect(() => {
    next.current.addEventListener("click", () => {
      current.current += 1;
      console.log("next");
      // slider.current.style.transform = `translate(-100px)`;
      setMove(move - 20);
    });
    prev.current.addEventListener("click", () => {
      console.log("prev");

      // slider.current.style.transform = `translate(-100px)`;
      setMove(move + 20);
    });
  }, [current]);

  console.log("render");
  return (
    <S.Container className="container">
      <S.Carousel className="carousel">
        <S.Slider className="slider" ref={slider} move={move}>
          <section>section 1</section>
          <section>section 2</section>
          <section>section 3</section>
          <section>section 4</section>
          <section>section 5</section>
        </S.Slider>
        <S.Controls className="controls">
          <button className="arrow prev" ref={prev}>
            prev
          </button>
          <button className="arrow next" ref={next}>
            next
          </button>
        </S.Controls>
      </S.Carousel>
    </S.Container>
  );
};

export default Slider;
