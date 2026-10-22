import React, { useState } from 'react';
import ScheduleClasses from './ScheduleClasses';

function AdminDashboard({
  batches,
  setBatches,
  scheduledClasses,
  setScheduledClasses,
  teachers,
  setTeachers,
  students,
  setStudents,
}) {
  // Admin menu navigation
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Batch states
  const [batchName, setBatchName] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [batchSubjects, setBatchSubjects] = useState([]);

  // Student states
  
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentBatch, setStudentBatch] = useState('');

  // Subject states
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');

  // Teacher states
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherSubjects, setTeacherSubjects] = useState([]);

  // Add Batch
  const addBatch = (e) => {
    e.preventDefault();

    const newBatch = {
      id: Date.now(),
      name: batchName,
      academicYear: academicYear,
      subjects: [...batchSubjects],
    };

    setBatches((prev) => [...prev, newBatch]);

    setBatchName('');
    setAcademicYear('');
    setBatchSubjects([]);
  };

  // Add Student
  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: studentName,
      email: studentEmail,
      batch: studentBatch,
    };

    setStudents((prev) => [...prev, newStudent]);

    setStudentName('');
    setStudentEmail('');
    setStudentBatch('');
  };

  // Add Subject
  const addSubject = (e) => {
    e.preventDefault();

    const newSubject = {
      id: Date.now(),
      name: subjectName,
    };

    setSubjects((prev) => [...prev, newSubject]);
    setSubjectName('');
  };

  // Add Teacher
  const addTeacher = (e) => {
    e.preventDefault();

    const newTeacher = {
      id: Date.now(),
      name: teacherName,
      email: teacherEmail,
      subjects: [...teacherSubjects],
    };

    setTeachers((prev) => [...prev, newTeacher]);

    setTeacherName('');
    setTeacherEmail('');
    setTeacherSubjects([]);
  };

  // Toggle selected subjects
  const toggleSubject = (subjectName, selected, currentSubjects, setCurrentSubjects) => {
    if (selected) {
      setCurrentSubjects((prev) =>
        prev.includes(subjectName) ? prev : [...prev, subjectName]
      );
    } else {
      setCurrentSubjects((prev) =>
        prev.filter((name) => name !== subjectName)
      );
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>

      {/* Dashboard Navigation */}
      <nav className="admin-menu">
        <button
          className={activeMenu === 'Dashboard' ? 'active' : ''}
          onClick={() => setActiveMenu('Dashboard')}
        >
          Dashboard
        </button>

        <button
          className={activeMenu === 'Manage Students' ? 'active' : ''}
          onClick={() => setActiveMenu('Manage Students')}
        >
          Manage Students
        </button>

        <button
          className={activeMenu === 'Manage Teachers' ? 'active' : ''}
          onClick={() => setActiveMenu('Manage Teachers')}
        >
          Manage Teachers
        </button>

        <button
          className={activeMenu === 'Manage Courses' ? 'active' : ''}
          onClick={() => setActiveMenu('Manage Courses')}
        >
          Manage Courses
        </button>

        <button
          className={activeMenu === 'Schedule Classes' ? 'active' : ''}
          onClick={() => setActiveMenu('Schedule Classes')}
        >
          Schedule Classes
        </button>
      </nav>

      {/* Dashboard Overview */}
      {activeMenu === 'Dashboard' && (
  <section className="admin-section admin-home">
    <div className="admin-welcome">
      <div>
        <p className="admin-eyebrow">TUTAS LEARNING MANAGEMENT SYSTEM</p>
        <h2>Welcome back, Admin! 👋</h2>
        <p>Manage your students, teachers, courses, and classes in one place.</p>
      </div>
      <div className="admin-welcome-icon">✦</div>
    </div>

    <div className="admin-stats">
      <div className="admin-stat-card">
        <span className="admin-stat-icon">🎓</span>
        <p className="admin-stat-label">Total Students</p>
        <h3>{students.length}</h3>
      </div>

      <div className="admin-stat-card">
        <span className="admin-stat-icon">👨‍🏫</span>
        <p className="admin-stat-label">Total Teachers</p>
        <h3>{teachers.length}</h3>
      </div>

      <div className="admin-stat-card">
        <span className="admin-stat-icon">📚</span>
        <p className="admin-stat-label">Total Subjects</p>
        <h3>{subjects.length}</h3>
      </div>

      <div className="admin-stat-card">
        <span className="admin-stat-icon">🗂️</span>
        <p className="admin-stat-label">Total Batches</p>
        <h3>{batches.length}</h3>
      </div>

      <div className="admin-stat-card">
        <span className="admin-stat-icon">📅</span>
        <p className="admin-stat-label">Scheduled Classes</p>
        <h3>{scheduledClasses.length}</h3>
      </div>
    </div>

    <div className="admin-quick-actions">
      <h3>Quick Actions</h3>
      <p>Choose what you'd like to manage today.</p>

      <div className="admin-action-grid">
        <button onClick={() => setActiveMenu('Manage Students')}>
          <span>🎓</span>
          <strong>Manage Students</strong>
          <small>Add and manage student records</small>
        </button>

        <button onClick={() => setActiveMenu('Manage Teachers')}>
          <span>👨‍🏫</span>
          <strong>Manage Teachers</strong>
          <small>Manage teachers and subjects</small>
        </button>

        <button onClick={() => setActiveMenu('Manage Courses')}>
          <span>📚</span>
          <strong>Manage Courses</strong>
          <small>Organize subjects and batches</small>
        </button>

        <button onClick={() => setActiveMenu('Schedule Classes')}>
          <span>📅</span>
          <strong>Schedule Classes</strong>
          <small>Plan upcoming online classes</small>
        </button>
      </div>
    </div>
  </section>
)}
      

      {/* Manage Students */}
      {activeMenu === 'Manage Students' && (
        <section className="admin-section">
          <h2>Manage Students</h2>

          <form onSubmit={addStudent}>
            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Student Email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              required
            />

            <label>Select Batch:</label>

            <select
              value={studentBatch}
              onChange={(e) => setStudentBatch(e.target.value)}
              required
            >
              <option value="">Select a batch</option>

              {batches.map((batch) => (
                <option key={batch.id} value={batch.name}>
                  {batch.name} - {batch.academicYear}
                </option>
              ))}
            </select>

            <button type="submit">Add Student</button>
          </form>

          <h3>Student List</h3>

          {students.length === 0 ? (
            <p>No students added yet.</p>
          ) : (
            students.map((student) => (
              <div className="admin-list-card" key={student.id}>
                <div>
                  <p><strong>{student.name}</strong></p>
                  <p>Batch: {student.batch}</p>
                  <p>Email: {student.email}</p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setStudents((prev) =>
                      prev.filter((s) => s.id !== student.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      )}

      {/* Manage Teachers */}
      {activeMenu === 'Manage Teachers' && (
        <section className="admin-section">
          <h2>Manage Teachers</h2>

          <form onSubmit={addTeacher}>
            <input
              type="text"
              placeholder="Teacher Name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Teacher Email"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              required
            />

            <h3>Select Subjects</h3>

            {subjects.length === 0 ? (
              <p>Add subjects first in Manage Courses.</p>
            ) : (
              subjects.map((subject) => (
                <label key={subject.id}>
                  <input
                    type="checkbox"
                    checked={teacherSubjects.includes(subject.name)}
                    onChange={(e) =>
                      toggleSubject(
                        subject.name,
                        e.target.checked,
                        teacherSubjects,
                        setTeacherSubjects
                      )
                    }
                  />
                  {subject.name}
                </label>
              ))
            )}

            <button type="submit">Add Teacher</button>
          </form>

          <h3>Teacher List</h3>

          {teachers.length === 0 ? (
            <p>No teachers added yet.</p>
          ) : (
            teachers.map((teacher) => (
              <div className="admin-list-card" key={teacher.id}>
                <div>
                  <p><strong>{teacher.name}</strong></p>
                  <p>Email: {teacher.email}</p>
                  <p>
                    Subjects:{' '}
                    {teacher.subjects?.length
                      ? teacher.subjects.join(', ')
                      : 'No subjects assigned'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setTeachers((prev) =>
                      prev.filter((t) => t.id !== teacher.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      )}
     {/* MANAGE COURSES */}
      {activeMenu === 'Manage Courses' && (
  <section className="admin-section">
    <div className="admin-courses-grid">

      {/* MANAGE SUBJECTS */}
      <div className="admin-course-card">
        <h2>📚 Manage Subjects</h2>
        <p>Add and manage the subjects offered in your LMS.</p>

        <form onSubmit={addSubject}>
          <input
            type="text"
            placeholder="Enter subject name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            required
          />

          <button type="submit">+ Add Subject</button>
        </form>

        <h3>Subject List ({subjects.length})</h3>

        <div className="admin-course-list">
          {subjects.length === 0 ? (
            <p className="admin-course-empty">
              No subjects added yet.
            </p>
          ) : (
            subjects.map((subject) => (
              <div className="admin-course-item" key={subject.id}>
                <strong>{subject.name}</strong>

                <button
                  type="button"
                  onClick={() =>
                    setSubjects((prev) =>
                      prev.filter((s) => s.id !== subject.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MANAGE BATCHES */}
      <div className="admin-course-card">
        <h2>👥 Manage Batches</h2>
        <p>Create batches, choose their academic year, and assign subjects.</p>

        <form onSubmit={addBatch}>
          <input
            type="text"
            placeholder="Batch Name"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Academic Year (e.g. 2026-2027)"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            required
          />

          <h3>Select Subjects</h3>

          {subjects.length === 0 ? (
            <p>Add subjects before creating a batch.</p>
          ) : (
            subjects.map((subject) => (
              <label key={subject.id}>
                <input
                  type="checkbox"
                  checked={batchSubjects.includes(subject.name)}
                  onChange={(e) =>
                    toggleSubject(
                      subject.name,
                      e.target.checked,
                      batchSubjects,
                      setBatchSubjects
                    )
                  }
                />
                {subject.name}
              </label>
            ))
          )}

          <button type="submit">+ Add Batch</button>
        </form>

        <h3>Batch List ({batches.length})</h3>

        <div className="admin-course-list">
          {batches.length === 0 ? (
            <p className="admin-course-empty">
              No batches added yet.
            </p>
          ) : (
            batches.map((batch) => (
              <div className="admin-course-item" key={batch.id}>
                <div>
                  <strong>{batch.name}</strong>
                  <p>Academic Year: {batch.academicYear}</p>
                  <p>
                    Subjects:{' '}
                    {batch.subjects?.length
                      ? batch.subjects.join(', ')
                      : 'No subjects assigned'}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  </section>
)}

      {/* Schedule Classes */}
      {activeMenu === 'Schedule Classes' && (
        <section className="admin-section">
          <ScheduleClasses
            batches={batches}
            teachers={teachers}
            subjects={subjects}
            setScheduledClasses={setScheduledClasses}
          />

          <h2>Scheduled Classes</h2>

          {scheduledClasses.length === 0 ? (
            <p>No classes scheduled yet.</p>
          ) : (
            scheduledClasses.map((cls) => (
              <div className="admin-list-card" key={cls.id}>
                <div>
                  <p><strong>{cls.subject}</strong></p>
                  <p>Batch: {cls.batch}</p>
                  <p>Teacher: {cls.teacher}</p>
                  <p>Date: {cls.date}</p>
                  <p>Time: {cls.time} - {cls.endTime}</p>
                </div>
              </div>
            ))
          )}
        </section>
      )}
    </div>
  );
}

export default AdminDashboard;