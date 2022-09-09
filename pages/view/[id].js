import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { Loader } from "semantic-ui-react";
import Item from "../../src/components/Item";

// Server Environment
// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
//   const res = await Axios.get(apiUrl);
//   const data = res.data;
//   return { props: { item: data, name: process.env.name } };
// }

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;
//   // const apiUrl = `https://jsonplaceholder.typicode.com/users`;
//   // const res = await axios.get(apiUrl);
//   // const res = await fetch(apiUrl);

//   // console.log(res);
//   // console.log(id);
//   return { props: {} };
// };

const Post = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios
    // async () => {
    // const result = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // console.log(result);
    // setData([...data, result.data]);
    // console.log("data : ", data);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // fetch() { return Promise }
      // Promise = {state: pending, ...}
      // Promise = {state: resolve, ...} > can call then method
      // Promise = {state: reject, ...} > can call catch method
      // if state is resolved > then method can be called ... and then method can get the response object as arguments
      // if state is rejected > catch method can be called ... and then method can get the error object as arguments
      // then method' arguments 는 callback function 이 될 수도 있고,
      // data type 이 될 수도 있다.
      .then((response) => response.json())
      // then(callback) { return Promise }
      // optional channing then method을 추가해서 Promise object의 두개의 콜백함수를 인수로 받아온다?
      // then(func(){console.log('success')}, func(){console.log('fail')}) { return Promise }
      // response.json 형식의 파일을 browser의 json() method를 사용하여 parsing하고
      // string > object
      .then((data) => {
        // data = object
        setData([...data]);
        // console.log("data : ", data);
      });
  }, []);

  // const Post = ({ item, name }) => {
  // console.log("props : ", props);
  // const router = useRouter();
  // const { id } = router.query;
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // const getData = ( ) => {
  //   Axios.get(API_URL).then((res) => {
  //     // console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div
        style={{
          marginTop: "80px",
          padding: "20px",
          border: "3px dashed black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          gap: "10px",
        }}
      >
        {data.slice(0, 3).map((item) => (
          <pre
            style={{
              border: "2px solid",
            }}
            key={item.id}
          >
            {JSON.stringify(item, null, 4)}
          </pre>
        ))}
      </div>

      {/* {item ? (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name} environment
          <Item item={item} />
        </>
      ) : null} */}
      {/* {isLoading ? (
        <Loader active inline="centered" style={{ margin: "100px" }}>
          Loading
        </Loader>
      ) : (
        <Item item={item} />
      )} */}
    </>
  );
};

export default Post;
