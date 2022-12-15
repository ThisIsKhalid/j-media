import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowId="2" title="Populer" fetchUrl={requests.requestPopuler} />
      <Row rowId="3" title="Top Rated" fetchUrl={requests.requestToprated} />
      <Row rowId="4" title="Trending" fetchUrl={requests.requestTrending} />
    </>
  );
};

export default Home;
