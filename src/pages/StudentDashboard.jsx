import { useState } from 'react';
import './StudentDashboard.css';

function StudentDashboard({ students,batches, scheduledClasses, teachers }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const student = students.length > 0 ? students[0] : null; 
  const studentBatch = batches.find((batch) => batch.name === student?.batch || batch.id === student?.batch);
  const myClasses = scheduledClasses.filter(
  (item) =>
    String(item.batch) === String(student?.batch) ||
    String(item.batch) === String(studentBatch?.id) ||
    item.batch === studentBatch?.name
);
  const menuItems = [
    'Dashboard', 
    'My Subjects',
    'Upcoming Classes',
    'Join Class',
    'Class History',
    'My Progress',
    'My Profile',
  ];

  return (
    <div className="student-dashboard">
      <aside className="student-sidebar">
        <h2>Tutas LMS</h2>
        <p className="student-role">Student Panel</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={
                activeMenu === item ? 'student-menu active' : 'student-menu'
              }
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="student-main">
        <header className="student-header">
          <div>
            <h1>{activeMenu}</h1>
            <p>Welcome, {student ? student.name : 'Student'}</p>
          </div>

          <div className="student-avatar">S</div>
        </header>

        {activeMenu === 'Dashboard' && (
          <section className="student-content">
            <h2>My Learning</h2>

            <div className="student-cards">
                            <div className="student-card">
                <h3>My Subjects</h3>

                {studentBatch?.subjects?.length > 0 ? (
                  <ul>
                    {studentBatch.subjects.map((subject, index) => (
                      <li key={index}>
                        {typeof subject === 'string'
                          ? subject
                          : subject.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No subjects assigned yet.</p>
                )}
              </div>

              <div className="student-card">
                <h3>Upcoming Classes</h3>
                <p>Check your class schedule</p>
              </div>

              <div className="student-card">
                <h3>Class History</h3>
                <p>Review your previous classes</p>
              </div>

              <div className="student-card">
                <h3>My Progress</h3>
                <p>Track your learning progress</p>
              </div>
            </div>
          </section>
        )}

       
        
       {activeMenu === 'My Profile' && (
  <section className="student-content">
    <div className="student-card">
      <h2>My Profile</h2>

      {student ? (
        <>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p>
            <strong>Batch:</strong>{' '}
            {studentBatch?.name || student.batch || 'No batch assigned'}
          </p>
          <p>
            <strong>Academic Year:</strong>{' '}
            {studentBatch?.academicYear || 'Not available'}
          </p>

          <h3>My Subjects</h3>

          {studentBatch?.subjects?.length > 0 ? (
            <ul>
              {studentBatch.subjects.map((subject, index) => (
                <li key={index}>
                  {typeof subject === 'string' ? subject : subject.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No subjects assigned to this batch yet.</p>
          )}
        </>
      ) : (
        <p>No student found. Please add a student in Admin Dashboard.</p>
      )}
    </div>
  </section>
)}
{activeMenu === 'My Subjects' && (
  <section className="student-content">
    <h2>My Subjects</h2>

    {studentBatch?.subjects?.length > 0 ? (
      <div className="student-cards">
        {studentBatch.subjects.map((subject, index) => (
          <div className="student-card" key={index}>
            <h3>
              {typeof subject === 'string'
                ? subject
                : subject.name}
            </h3>
            <p>Assigned to your batch</p>
          </div>
        ))}
      </div>
    ) : (
      <p>No subjects assigned to your batch yet.</p>
    )}
  </section>
  
)}
        {activeMenu === 'Upcoming Classes' && (
          <section className="student-content">
            <h2>Upcoming Classes</h2>

            {myClasses.filter((item) => item.status !== 'Completed').length > 0 ? (
              <div className="student-cards">
                {myClasses
                  .filter((item) => item.status !== 'Completed')
                  .map((item) => (
                    <div className="student-card" key={item.id}>
                      <h3>{item.subject}</h3>
                      <p><strong>Date:</strong> {item.date}</p>
                      <p><strong>Time:</strong> {item.time}</p>
                      <p><strong>End Time:</strong> {item.endTime}</p>
                      <p><strong>Status:</strong> {item.status}</p>
                    </div>
                  ))}
              </div>
            ) : (
              <p>No upcoming classes scheduled for your batch.</p>
            )}
          </section>
        )}
        
      </main>
    </div>
  );
}

export default StudentDashboard;