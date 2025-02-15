import React from "react";
import Navbar from "../components/Navbar";
import ActivityCard from "../components/ActivityCard";
import "./../styles/Activities.css";

const activities = [
  {
    image: "https://via.placeholder.com/400x250/ff5733/ffffff?text=กิจกรรม+1",
    title: "กิจกรรมวันวิทยาศาสตร์",
    description: "กิจกรรมการทดลองและนิทรรศการวิทยาศาสตร์ที่สนุกสนานและให้ความรู้",
  },
  {
    image: "https://via.placeholder.com/400x250/33ff57/ffffff?text=กิจกรรม+2",
    title: "กีฬาสีโรงเรียน",
    description: "การแข่งขันกีฬาระหว่างสี เสริมสร้างความสามัคคี และความสนุกสนาน",
  },
  {
    image: "https://via.placeholder.com/400x250/3357ff/ffffff?text=กิจกรรม+3",
    title: "วันภาษาไทย",
    description: "กิจกรรมส่งเสริมการใช้ภาษาไทยอย่างถูกต้องและการแสดงละครพื้นบ้าน",
  },
];

const Activities = () => {
  return (
    <div className="activities-page"> {/* 🔥 เพิ่ม class เพื่อควบคุม layout */}
      <Navbar />
      <div className="activities-container">
        <h2>กิจกรรมของเรา</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              image={activity.image}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
