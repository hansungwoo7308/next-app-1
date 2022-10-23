import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as S from "../../styles/components/Landing.styled";
import { decrement, increment } from "../../core/redux/counterSlice";
import { add } from "../../core/redux/usersSlice";

const Landing = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [productIndex, setProductIndex] = useState("Coffee-1");

  const store = useStore();
  const counter = store.getState().main.counter;
  const users = store.getState().main.users;
  const counterSelector = useSelector((state) => state.main.counter);
  const usersSelector = useSelector((state) => state.main.users);
  const dispatch = useDispatch();

  // Counter Controller
  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };

  // Users Controller
  const addUser = () => {
    dispatch(add("Mike"));
  };

  return (
    <S.Container>
      <pre
        style={{
          width: "500px",
          height: "500px",
          border: "3px dashed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Counter</h1>
        {JSON.stringify(counter, null, 4)}
        <br />
        <h1>Users</h1>
        {JSON.stringify(users, null, 4)}
      </pre>
      <pre></pre>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <S.BuyButton onClick={incrementCounter}>Increment</S.BuyButton>
        <S.BuyButton onClick={decrementCounter}>Decrement</S.BuyButton>
        <S.BuyButton onClick={addUser}>Add User</S.BuyButton>
      </div>

      {/* <S.Product>
        <Link
          // href={"/products"}
          href={"#"}
        >
          <a>
            <img src={`/images/${productIndex}.png`} />
          </a>
        </Link>
      </S.Product>

      <S.Infomation>
        <S.Headline>Here is a something</S.Headline>
        <S.Phrase>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          necessitatibus eveniet corrupti iusto error deleniti nam sequi atque
          earum, blanditiis aspernatur distinctio enim excepturi recusandae
          facere impedit. Laboriosam, rerum id!
        </S.Phrase>
        <S.BuyButton onClick={handleClick}>Buy Now</S.BuyButton>
      </S.Infomation>

      <S.ProductButton>
        <a onClick={() => setProductIndex("Coffee-1")}>
          <img src={"/images/Coffee-1.png"} alt="" />
        </a>
        <a onClick={() => setProductIndex("Coffee-2")}>
          <img src={"/images/Coffee-2.png"} alt="" />
        </a>
        <a onClick={() => setProductIndex("Coffee-3")}>
          <img src={"/images/Coffee-3.png"} alt="" />
        </a>
        <a onClick={() => setProductIndex("Coffee-4")}>
          <img src={"/images/Coffee-4.png"} alt="" />
        </a>
      </S.ProductButton> */}
      {/* <S.Layout></S.Layout> */}
    </S.Container>
  );
};

export default Landing;
