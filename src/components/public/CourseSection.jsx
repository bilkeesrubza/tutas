import React from 'react'

function CourseSection() {
  return (
    <section className="courses">
  <h2>Our Popular Courses</h2>
  <p className="courses-description">
    Explore our courses and start learning today.
  </p>

  <div className="course-grid">
    <div className="course-card">
      <h3>Web Development</h3>
      <p>Learn to build modern websites and web applications.</p>
    </div>

    <div className="course-card">
      <h3>Python Programming</h3>
      <p>Learn Python programming from the basics.</p>
    </div>

    <div className="course-card">
      <h3>React Development</h3>
      <p>Learn to build interactive user interfaces.</p>
    </div>
  </div>
</section>
  );
}

export default CourseSection;
