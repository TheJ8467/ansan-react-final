import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CardNews from "./CardNews";
import { Card, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@material-ui/core/styles";

function News() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    try {
      const response = await fetch(" https://ce7f0ee9e0f9.ngrok.app/all");
      const data = await response.json();
      setData((prevData) => [...prevData, ...data.news]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const proxyUrl = " https://ce7f0ee9e0f9.ngrok.app/image-proxy?url=";

  const [visibleCards, setVisibleCards] = useState(2);

  function handleLoadMore() {
    setVisibleCards(visibleCards + 1);
  }

  function handleHideCard() {
    setVisibleCards(visibleCards - 1);
  }

  return (
    <div
      className="container"
      style={{
        marginTop: "2rem"
      }}
    >
      <NewsGrid data={data} proxyUrl={proxyUrl} visibleCards={visibleCards} />

      {visibleCards >= data.length / 2 && (
        <div className="text-center mt-3">
          준비된 뉴스가 없습니다.{" "}
          <a
            href="http://www.ansannews.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            안산 뉴스 웹페이지로 이동하기
          </a>
        </div>
      )}

      <Grid
        container
        spacing={2}
        style={{
          marginTop: "1rem"
        }}
      >
        <Grid item xs={6}>
          <Button
            variant="primary"
            onClick={handleLoadMore}
            style={{ width: "100%" }}
          >
            뉴스 더 보기
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="warning"
            onClick={handleHideCard}
            style={{ width: "100%" }}
          >
            뉴스 접기
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

function NewsCardContainer({ children }) {
  const theme = useTheme();
  const Container = styled(Card)({
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    "&:last-child": {
      paddingRight: 0
    }
  });

  return <Container>{children}</Container>;
}

function NewsGrid({ data, proxyUrl, visibleCards }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.slice(0, visibleCards).map((newsItem, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <NewsCardContainer>
            <CardNews key={index} newsItem={newsItem} proxyUrl={proxyUrl} />
          </NewsCardContainer>
        </Grid>
      ))}
    </Grid>
  );
}

export default News;
