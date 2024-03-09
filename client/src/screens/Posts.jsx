import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const Posts = () => {
  //   const [card, setCard] = useState([]);
  //   const [page, setPage] = useState(1);

  // const [posts, setPosts] = useState([]);

  //   `http://localhost:8080/api/users/postList?filter=${searchFilter}`,

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:8080/api/users/postlist");
    const data= await res.json();
    // setPosts(res.data.user);
    // console.log(posts);
    console.log("res: ", data);
  };

  fetchPosts();

  //   const getCardData = async () => {

  //     if (page >= 13){
  //         const data = card;
  //         console.log('data: ', data);
  //         setCard((prev) => [...prev, data]);
  //     }
  //     else {
  //       const res = await axios.get(
  //         `https://jsonplaceholder.typicode.com/posts?_limit=9&_page= ${page}`
  //       );
  //       const data = res.data;
  //       setCard((prev) => [...prev, ...data]);
  //     }
  //   };

  //   useEffect(() => {
  //     getCardData();
  //   }, [page]);

  //   const handleInfiniteScroll = async () => {
  //     // console.log('scrollHeight', document.documentElement.scrollHeight);
  //     // console.log('innerHeight', window.innerHeight);
  //     // console.log('scrollTop' , document.documentElement.scrollTop);
  //     // if scrollHeight === innerHeight + scrollTop , then load more data
  //     try {
  //       if (
  //         window.innerHeight + document.documentElement.scrollTop + 1 >=
  //         document.documentElement.scrollHeight
  //       ) {
  //         setPage((prev) => prev + 1);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleInfiniteScroll);
  //     return () => window.removeEventListener("scroll", handleInfiniteScroll);
  //   }, []);

  return (
    <>
      {/* <CardList CardsInfo={card} /> */}

      <h1>hello</h1>
    </>
  );
};

export default Posts;
