import React from "react";
import "./NewsCard.css"; // นำเข้า CSS ของ component

const NewsCard = ({ title, date, content, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-date">{date}</p>
        <p>{content}</p>
        <button className="read-more">อ่านเพิ่มเติม</button>
      </div>
    </div>
  );
};

export default NewsCard;
