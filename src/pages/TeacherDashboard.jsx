import React from 'react'
import { useState } from 'react';
import "./TeacherDashboard.css"

function TeacherDashboard({ batches, scheduledClasses,teachers }) {
  const [activeMenu, setActiveMenu] = useState('My Batches');
  console.log({batches, scheduledClasses, teachers});
  return (
    <div className="teacher-layout">
    {/* Sidebar Menu */}
    <div className="teacher-menu">
      <h2>Dashboard Menu</h2>

      <ul>
        <li onClick={() => setActiveMenu("My Batches")}>
          My Batches
        </li>

        <li onClick={() => setActiveMenu("My Subjects")}>
          My Subjects
        </li>

        <li onClick={() => setActiveMenu("Class Schedule")}>
          Class Schedule
        </li>

        <li onClick={() => setActiveMenu("Google Meet Links")}>
          Google Meet Links
        </li>

        <li onClick={() => setActiveMenu("My Profile")}>
          My Profile
        </li>
      </ul>
    </div>

    {/* Main Content */}
    <div className="teacher-content">
      <h2>{activeMenu}</h2>
      

            {activeMenu === "My Batches" && (
        <div>
          {batches.length === 0 ? (
            <p>No batches available yet.</p>
          ) : (
            batches.map((batch) => (
              <div key={batch.id}>
                <h3>{batch.name}</h3>
                <p>Academic Year: {batch.academicYear}</p>
              </div>
            ))
          )}
        </div>
      )}  

     {activeMenu === "My Subjects" && (
        <div>
          {teachers.length === 0 ? (
            <p>No teachers available yet.</p>
          ) : (
            teachers.map((teacher) => (
              <div key={teacher.id}>
                <h3>{teacher.name}</h3>

                {teacher.subjects && teacher.subjects.length > 0 ? (
                  <p>
                    Subjects: {teacher.subjects.join(", ")}
                  </p>
                ) : (
                  <p>No subjects assigned.</p>
                )}
              </div>
            ))
          )}
        </div>
      )}
      
      {activeMenu === "Class Schedule" && (
      <div>
        {scheduledClasses.length === 0 ? (
          <p>No classes scheduled yet.</p>
        ) : (
          scheduledClasses.map((item) => {
            const startDateTime = new Date(`${item.date}T${item.time}`);
            const endDateTime = new Date(`${item.date}T${item.endTime}`);
            const now = new Date();

            let status = "Upcoming";

            if (now >= endDateTime) {
              status = "Completed";
            } else if (now >= startDateTime) {
              status = "Live";
            }

            return (
              <div key={item.id}>
                <h3>{item.subject}</h3>
                <p>Batch: {item.batch}</p>
                <p>Teacher: {item.teacher}</p>
                <p>Date: {item.date}</p>
                <p>Start Time: {item.time}</p>
                <p>End Time: {item.endTime}</p>
                <p>Status: {status}</p>

                <button
                  disabled={status !== "Live" || !item.googleMeetLink}
                  onClick={() => window.open(item.googleMeetLink, "_blank")}
                >
                  Join Class
                </button>
              </div>
            );
          })
        )}
      </div>
      )}

      {activeMenu === "Google Meet Links" && (
      <div>
        {scheduledClasses.length === 0 ? (
          <p>No Google Meet links available yet.</p>
        ) : (
          scheduledClasses.map((item) => (
            <div key={item.id}>
              <h3>{item.subject}</h3>
              <p>Batch: {item.batch}</p>

              {item.googleMeetLink ? (
                <a
                  href={item.googleMeetLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Google Meet
                </a>
              ) : (
                <p>No Meet link added.</p>
              )}
            </div>
          ))
        )}
      </div>
  )}

      {activeMenu === "My Profile" && (
  <div className="teacher-profile">
    <div className="profile-header">
      <div className="profile-avatar">
        <span>
          {teachers.length > 0
            ? teachers[0].name.charAt(0).toUpperCase()
            : "T"}
        </span>
      </div>

      <div className="profile-heading">
        <h2>
          {teachers.length > 0
            ? teachers[0].name
            : "Teacher Name"}
        </h2>
        <p>Teacher | Tutas Learning Management System</p>
        <span className="profile-status">Teacher Account</span>
      </div>

      <button
        className="edit-profile-btn"
        onClick={() =>
          alert("Edit Profile feature will be added next!")
        }
      >
        Edit Profile
      </button>
    </div>

    <div className="profile-section">
      <h3>Personal Information</h3>

      <div className="profile-info-grid">
        <div className="profile-info-card">
          <span className="profile-label">Full Name</span>
          <p>
            {teachers.length > 0
              ? teachers[0].name
              : "No teacher added yet"}
          </p>
        </div>

        <div className="profile-info-card">
          <span className="profile-label">Email Address</span>
          <p>
            {teachers.length > 0
              ? teachers[0].email
              : "No email available"}
          </p>
        </div>
      </div>
    </div>

    <div className="profile-section">
      <h3>My Subjects</h3>

      <div className="profile-subject-list">
        {teachers.length > 0 &&
        teachers[0].subjects &&
        teachers[0].subjects.length > 0 ? (
          teachers[0].subjects.map((subject, index) => (
            <span className="profile-subject-tag" key={index}>
              {subject}
            </span>
          ))
        ) : (
          <p>No subjects assigned yet.</p>
        )}
      </div>
    </div>

    <div className="profile-section">
      <h3>My Batches</h3>

      {batches.length > 0 ? (
        batches.map((batch) => (
          <div className="profile-batch-card" key={batch.id}>
            <div className="profile-batch-icon">B</div>

            <div>
              <h4>{batch.name}</h4>
              <p>Academic Year: {batch.academicYear}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No batches available yet.</p>
      )}
    </div>
  </div>
)}
    </div>
  </div>


    
  )
}

export default TeacherDashboard
