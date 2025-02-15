import React from "react";
import Navbar from "../components/Navbar";
import StaffCard from "../components/StaffCard";
import "./../styles/Staff.css";

const staffList = [
  {
    image: "https://via.placeholder.com/150",
    name: "นายสมชาย สมบูรณ์",
    position: "ผู้อำนวยการโรงเรียน",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "นางสาวศิริพร ใจดี",
    position: "รองผู้อำนวยการ",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "นายธนา วัฒนากุล",
    position: "ครูวิชาคณิตศาสตร์",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "นางสาวอรทัย บุญสุข",
    position: "ครูวิชาภาษาไทย",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "นายกฤษณะ แสงทอง",
    position: "ครูวิชาวิทยาศาสตร์",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "นางสาวสมฤดี ศรีสวัสดิ์",
    position: "ครูวิชาภาษาอังกฤษ",
  },
];

const Staff = () => {
  return (
    <div>
      <Navbar />
      <div className="staff-container">
        <h2>บุคลากรของโรงเรียน</h2>
        <div className="staff-grid">
          {staffList.map((staff, index) => (
            <StaffCard 
              key={index}
              image={staff.image}
              name={staff.name}
              position={staff.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
