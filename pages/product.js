// export const getServerSideProps = async () => {
//   console.log("클라이언트 요청에 의한 getServerSideProps");
//   const res = await fetch(
//     // `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//     `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
//   );
//   // const posts = await res.json();
//   const photos = await res.json();

//   return {
//     props: {
//       // posts: posts,
//       items: photos,
//     },
//   };
// };

// export const getStaticProps = async () => {
//   const res = await fetch(
//     // `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//     // `http://localhost:8080/api/posts`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts: posts,
//       revalidate: 20, // 처음 접속후 20초후에 리제너레이션
//     },
//   };
// };

// const Product = ({ items }) => {
const Product = () => {
  // console.log("items : ", items);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        width: "80%",
        minWidth: "350px",
        border: "3px dashed",
        height: "calc(100vh - 80px)",
        overflow: "hidden",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          // // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "800px",
          minWidth: "500px",
          gap: "10px",
          padding: "100px",
          flexWrap: "wrap",
          border: "3px dashed green",
        }}
      >
        {/* {items.map((item) => (
          <li
            style={{
              width: "100px",
              height: "100px",
            }}
            key={item.id}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={item.url}
              alt=""
            />
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Product;
