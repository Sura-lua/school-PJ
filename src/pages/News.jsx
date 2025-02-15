import React from "react";
import Navbar from "../components/Navbar"; // ✅ นำเข้า Navbar
import "../styles/News.css"; // ✅ ตรวจสอบว่าไฟล์ CSS มีอยู่จริง

const newsList = [
  {
    id: 1,
    title: "เปิดรับสมัครนักเรียนใหม่ ปีการศึกษา 2567",
    content: "โรงเรียนเปิดรับสมัครนักเรียนใหม่ตั้งแต่วันนี้ ถึงวันที่ 30 เมษายน 2567...",
    image: "https://via.placeholder.com/600x300"
  },
  {
    id: 2,
    title: "กิจกรรมกีฬาสี ประจำปี 2567",
    date: "5 กุมภาพันธ์ 2567",
    content: "โรงเรียนจะจัดกิจกรรมกีฬาสีระหว่างวันที่ 15-17 กุมภาพันธ์ 2567...",
    image: "https://via.placeholder.com/600x300"
  },
  {
    id: 3,
    title: "โครงการพี่สอนน้อง ส่งเสริมการเรียนรู้",
    date: "1 กุมภาพันธ์ 2567",
    content: "โครงการพี่สอนน้อง จัดขึ้นเพื่อให้พี่มัธยมศึกษาตอนปลาย...",
    image: "https://via.placeholder.com/600x300"
  }
];

const News = () => {
  return (
    <>
      <Navbar />  {/* ✅ เพิ่ม Navbar ด้านบน */}
      <div className="news-container full-width">
        <h1>📰 ข่าวสารโรงเรียน</h1>
        <div className="news-grid">
          {newsList.map((news) => (
            <div key={news.id} className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3>{news.title}</h3>
                <p className="news-date">{news.date}</p>
                <p>{news.content}</p>
                <button className="read-more">อ่านเพิ่มเติม</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
