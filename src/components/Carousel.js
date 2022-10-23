import * as S from "../../styles/components/Carousel.styled";
import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    // Create and Read /////////////////////////////////////////////
    const track = document.querySelector(".carousel_track");
    const slides = Array.from(track.children); // list items
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const dotsNav = document.querySelector(".carousel_nav");
    const dots = Array.from(dotsNav.children);
    // 슬라이드 가로 측정
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Update ///////////////////////////////////////////////////////
    // 초기 슬라이드 배열 정렬
    // arrange the slides next to one another
    // slides[0].style.left = slideWidth * 0 + "px";
    // slides[1].style.left = slideWidth * 1  + "px";
    // slides[2].style.left = slideWidth * 2 + "px";

    // Position Handler
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    // Move to Slide Handler
    const moveToSlide = (track, currentSlide, targetSlide) => {
      // move to the next slide
      track.style.transform = `translate(-${targetSlide.style.left})`;
      currentSlide.classList.remove("current_slide");
      targetSlide.classList.add("current_slide");
    };

    // Move to Dlide Handler
    const moveToDot = (currentDot, targetDot) => {
      currentDot.classList.remove("current_dot");
      targetDot.classList.add("current_dot");
    };

    // Remove Button Handler
    const settingButton = (slides, prev, next, targetIndex) => {
      if (targetIndex === 0) {
        prev.classList.add("is_hidden");
        next.classList.remove("is_hidden");
      } else if (targetIndex === slides.length - 1) {
        prev.classList.remove("is_hidden");
        next.classList.add("is_hidden");
      } else {
        prev.classList.remove("is_hidden");
        next.classList.remove("is_hidden");
      }
    };

    // when I click left, move slides to the left
    prev.addEventListener("click", () => {
      console.log("prev");
      const currentSlide = document.querySelector(".current_slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector(".current_dot");
      const prevDot = currentDot.previousElementSibling;
      // 버튼셋팅을 위한 인덱스 가져오기
      const prevIndex = slides.findIndex((slide) => slide === prevSlide);

      moveToSlide(track, currentSlide, prevSlide); // 핸들러 장착
      moveToDot(currentDot, prevDot);
      settingButton(slides, prev, next, prevIndex);
    });

    // when I click right, move slides to the right
    next.addEventListener("click", () => {
      console.log("next");

      const currentSlide = document.querySelector(".current_slide");
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector(".current_dot");
      const nextDot = currentDot.nextElementSibling;
      // 버튼셋팅을 위한 인덱스 가져오기
      const nextIndex = slides.findIndex((slide) => slide === nextSlide);

      moveToSlide(track, currentSlide, nextSlide); // 핸들러 장착
      moveToDot(currentDot, nextDot);
      settingButton(slides, prev, next, nextIndex);
    });

    // when I click the nav indicators, move to that slide
    dotsNav.addEventListener("click", (e) => {
      // what indicator was clicked on?

      // Create and Read (from event)
      const targetDot = e.target.closest("button");
      if (!targetDot) return; // closest button 이 없으면 event 종료
      // dotsNav > button
      // 부모로부터 이벤트를 생성하고, 타겟이 발생했을때만 아래의 스크립트를 실행하도록...

      const currentSlide = track.querySelector(".current_slide");
      const currentDot = dotsNav.querySelector(".current_dot");
      // Indexing (클릭안 엘리먼트를 찾기위해...)
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex]; // 컴퓨팅 인덱스 장착
      // console.log("targetSlide : ", targetSlide);

      moveToSlide(track, currentSlide, targetSlide); // 핸들러 장착
      moveToDot(currentDot, targetDot);
      settingButton(slides, prev, next, targetIndex);
    });
  });

  console.log("redering...");

  return (
    <S.Container>
      <S.Carousel className="carousel">
        <button className="carousel_button prev is_hidden">prev</button>
        <button className="carousel_button next">next</button>
        <S.CarouselTrackContainer className="carousel_track_container">
          <S.CarouselTrack className="carousel_track">
            <li className="carousel_slide current_slide">item</li>
            <li className="carousel_slide">item</li>
            <li className="carousel_slide">item</li>
          </S.CarouselTrack>
        </S.CarouselTrackContainer>
        <S.CarouselNav className="carousel_nav">
          <button className="carousel_dot current_dot"></button>
          <button className="carousel_dot"></button>
          <button className="carousel_dot"></button>
        </S.CarouselNav>
      </S.Carousel>
    </S.Container>
  );
};

export default Carousel;
