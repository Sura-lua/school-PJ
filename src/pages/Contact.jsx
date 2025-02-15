import React, { useState } from "react";
import "./../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📨 ขอบคุณที่ติดต่อเรา! คุณ: ${formData.name}`);
    setFormData({ name: "", email: "", message: "" }); // ✅ รีเซ็ตฟอร์มหลังส่ง
  };

  return (
    <div className="contact-container">
      <h2>📞 ติดต่อเรา</h2>
      <div className="contact-info">
        <p>🏫 ที่อยู่: โรงเรียนตัวอย่าง, กรุงเทพฯ 10110</p>
        <p>📧 อีเมล: contact@school.ac.th</p>
        <p>📞 โทร: 02-123-4567</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>ชื่อของคุณ:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>อีเมลของคุณ:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>ข้อความของคุณ:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <div className="button-group">
          <button type="submit" className="submit-btn">ส่งข้อความ</button>
          <button type="reset" className="reset-btn" onClick={() => setFormData({ name: "", email: "", message: "" })}>ล้างข้อมูล</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
