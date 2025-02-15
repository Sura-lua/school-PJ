import React from "react";
import "./../styles/Activities.css";

const ActivityCard = ({ image, title, description }) => {
  return (
    <div className="activity-card">
      <img src={image} alt={title} className="activity-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="read-more">อ่านเพิ่มเติม</button>
    </div>
  );
};

export default ActivityCard;
