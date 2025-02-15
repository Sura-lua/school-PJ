import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="#">หน้าแรก</a></li>
        <li><a href="#">ข่าวสาร</a></li>
        <li><a href="#">กิจกรรม</a></li>
        <li><a href="#">บุคลากร</a></li>
        <li><a href="#">ติดต่อเรา</a></li>
        <li><a href="#">ผลการเรียน</a></li>
        <li><button className="login-btn">เข้าสู่ระบบ</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
