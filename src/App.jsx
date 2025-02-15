import React from 'react';
import './App.css';
import Slider from './Slider';

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li><a href="#">หน้าแรก</a></li>
            <li><a href="#">ข่าวสาร</a></li>
            <li><a href="#">กิจกรรม</a></li>
            <li><a href="#">บุคลากร</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
            <li><a href="#">ผลการเรียน</a></li>
            <li><a href="#" className="login-btn">เข้าสู่ระบบ</a></li>
          </ul>
        </nav>
      </header>

      {/* Slide Section */}
      <section className="slider">
        <div className="slide">รูปภาพสไลด์</div>
      </section>
    </div>
  );
}

export default App;
