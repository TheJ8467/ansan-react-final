import React from "react";
import { Card, Button } from "react-bootstrap";

function CardNews({ newsItem, proxyUrl }) {
  return (
    <Card
      style={{
        maxWidth: "100%",
        height: "400px"
      }}
    >
      {newsItem.img_src && (
        <Card.Img
          variant="top"
          src={`${proxyUrl}${encodeURIComponent(newsItem.img_src)}`}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {newsItem.img_src ? (
          <Card.Title>{newsItem.title}</Card.Title>
        ) : (
          <Card.Title style={{ textAlign: "center" }}>
            {newsItem.title}
          </Card.Title>
        )}

        {newsItem.img_src ? (
          <Card.Text>{newsItem.desc.slice(0, 40)}...</Card.Text>
        ) : (
          <Card.Text>{newsItem.desc}</Card.Text>
        )}
        <div>
          <Button
            href={newsItem.link}
            variant="info"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%" }}
          >
            뉴스 보기
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardNews;
