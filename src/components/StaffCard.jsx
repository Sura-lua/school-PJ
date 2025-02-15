import React from "react";

const StaffCard = ({ image, name, position }) => {
  return (
    <div className="staff-card">
      <img src={image} alt={name} className="staff-image" />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default StaffCard;
