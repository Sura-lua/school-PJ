import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ✅ แถบเมนูด้านบน */}
      <div className="navbar">
        <h2>LOGO</h2>
        <nav>
          <a href="/">หน้าแรก</a>
          <a href="/news">ข่าวสาร</a>
          <a href="/activities">กิจกรรม</a>
          <a href="/staff">บุคลากร</a>
          <a href="/contact">ติดต่อเรา</a>
          <a href="/results">ผลการเรียน</a>
        </nav>
        <button className="login-btn">เข้าสู่ระบบ</button>
      </div>

      {/* ✅ คอนเทนต์ของหน้าติดต่อเรา */}
      <div className="contact-container">
        {/* 🏫 ข้อมูลติดต่อ */}
        <div className="contact-info">
          <h2>📞 ติดต่อเรา</h2>
          <p>🏫 ที่อยู่: โรงเรียนตัวอย่าง, กรุงเทพฯ 10110</p>
          <p>📧 อีเมล: contact@school.ac.th</p>
          <p>📞 โทร: 02-123-4567</p>
        </div>

        {/* 📩 ฟอร์มติดต่อ */}
        <div className="contact-form">
          <label>ชื่อของคุณ:</label>
          <input type="text" placeholder="กรอกชื่อของคุณ" />

          <label>อีเมลของคุณ:</label>
          <input type="email" placeholder="กรอกอีเมลของคุณ" />

          <label>ข้อความของคุณ:</label>
          <textarea rows="4" placeholder="พิมพ์ข้อความที่นี่..."></textarea>

          <div className="button-group">
            <button className="submit-btn">ส่งข้อความ</button>
            <button className="reset-btn">ล้างข้อมูล</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
