import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <section className="content">
        <h2>เกี่ยวกับเรา</h2>
        <p>นี่คือเว็บไซต์ของโรงเรียนที่นำเสนอข่าวสาร กิจกรรม และข้อมูลต่างๆ</p>
      </section>
    </div>
  );
};

export default Home;
