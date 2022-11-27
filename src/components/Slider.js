import { useEffect } from "react";
import { useState, useRef } from "react";

import Image from "next/image";
import * as S from "../../styles/components/Slider.styled";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Slider = ({ data }) => {
  // Data
  // console.log("data : ", data);

  // For Slider
  const [direction, setDirection] = useState();
  const carousel = useRef();
  const slider = useRef();

  const sortSlider = () => {
    if (direction === -1) {
      slider.current.append(slider.current.firstElementChild);
    }

    if (direction === 1) {
      slider.current.prepend(slider.current.lastElementChild);
    }
  };

  const setSlider = () => {
    slider.current.style.transition = `none`;
    slider.current.style.transform = `translate(0)`;
    setTimeout(() => {
      slider.current.style.transition = ``;
    });
  };

  const prev = () => {
    if (direction === -1 || direction === undefined) {
      slider.current.append(slider.current.firstElementChild);
      setDirection(() => 1);
    }
    setDirection(() => 1);
    carousel.current.style.justifyContent = `flex-end`;
    slider.current.style.transform = `translate(20%)`;
  };

  const next = () => {
    if (direction === 1) {
      slider.current.prepend(slider.current.lastElementChild);
      setDirection(() => -1);
    }
    setDirection(() => -1);
    carousel.current.style.justifyContent = `flex-start`;
    slider.current.style.transform = `translate(-20%)`;
  };

  useEffect(() => {
    // const tick = setTimeout(() => {
    //   next();
    // }, 3000);
    // return () => clearTimeout(tick);
  });

  return (
    <S.Container className="container">
      <S.Carousel className="carousel" ref={carousel}>
        <S.Slider
          className="slider"
          ref={slider}
          onTransitionEnd={() => {
            sortSlider();
            setSlider();
          }}
        >
          <section>
            <Image
              src="https://source.unsplash.com/random/?rain"
              layout="fill"
            />
          </section>
          <section>
            <Image
              src="https://source.unsplash.com/random/?coffee"
              layout="fill"
            />
          </section>
          <section>
            <Image
              src="https://source.unsplash.com/random/?river"
              layout="fill"
            />
          </section>
          <section>
            <Image
              src="https://source.unsplash.com/random/?cloud"
              layout="fill"
            />
          </section>
          <section>
            <Image
              src="https://source.unsplash.com/random/?train"
              layout="fill"
            />
          </section>
          {/* <section>
            <img src={data[0].urls.regular} alt="" />
          </section>
          <section>
            <img src={data[1].urls.regular} alt="" />
          </section>
          <section>
            <img src={data[2].urls.regular} alt="" />
          </section>
          <section>
            <img src={data[3].urls.regular} alt="" />
          </section>
          <section>
            <img src={data[4].urls.regular} alt="" />
          </section> */}
          {/* <section>section 1</section>
          <section>section 2</section>
          <section>section 3</section>
          <section>section 4</section>
          <section>section 5</section> */}
        </S.Slider>
        <S.Controls className="controls">
          <div className="arrow prev" onClick={prev}>
            <IoMdArrowDropleft size={70} />
          </div>
          <div className="arrow next" onClick={next}>
            <IoMdArrowDropright size={70} />
          </div>
        </S.Controls>
      </S.Carousel>
    </S.Container>
  );
};

export default Slider;
