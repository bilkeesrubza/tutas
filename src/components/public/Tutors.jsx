import React from 'react'

function Tutors() {
  return (
        <section className="tutors">
      <h2>Meet Our Expert Tutors</h2>
      <p>Learn from experienced tutors who support your learning journey.</p>

      <div className="tutor-grid">
        <div className="tutor-card">
          <h3>Rahul Kumar</h3>
          <p>Web Development Tutor</p>
        </div>

        <div className="tutor-card">
          <h3>Sarah Thomas</h3>
          <p>Python Programming Tutor</p>
        </div>

        <div className="tutor-card">
          <h3>Arjun Nair</h3>
          <p>React Development Tutor</p>
        </div>
      </div>
    </section>
  );
     
}
export default Tutors;
