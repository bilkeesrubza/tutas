import React from 'react'
import { useState } from 'react';

function ScheduleClasses({ batches, teachers,subjects, setScheduledClasses }) {
    const [selectedBatch, setSelectedBatch] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [googleMeetLink, setGoogleMeetLink] = useState('');
    const [classDate, setClassDate] = useState('');
    const [classTime, setClassTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleScheduleClass = (e) => {
        e.preventDefault();
        const scheduledClass = {
            batch: selectedBatch,
            subject: selectedSubject,
            teacher: selectedTeacher,
            googleMeetLink: googleMeetLink,
            date: classDate,
            time: classTime,
            endTime: endTime
        };
        console.log(scheduledClass);
        setScheduledClasses((prev) => 
            [...prev, {...scheduledClass, id: Date.now(),status: 'Scheduled'}]);
        setSelectedBatch('');
        setSelectedSubject('');
        setSelectedTeacher('');
        setGoogleMeetLink('');
        setClassDate('');
        setClassTime('');
        setEndTime('');

    };

    return (
        <div>
            <h2>Schedule Classes</h2>

      <form onSubmit={handleScheduleClass}>
        <label>Select Batch:</label>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="">Select Batch</option>
          {batches.map((batch) => (
            <option key={batch.id} value={batch.name}>
              {batch.name} - {batch.academicYear}
            </option>
          ))}
        </select>

        <label>Select Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>

        <label>Select Teacher:</label>
        <select
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.name}>
              {teacher.name}
            </option>
          ))}
        </select>

        <label>Google Meet Link:</label>
        <input
          type="url"
          placeholder="Enter Google Meet link"
          value={googleMeetLink}
          onChange={(e) => setGoogleMeetLink(e.target.value)}
        />

        <label>Class Date:</label>
        <input
          type="date"
          value={classDate}
          onChange={(e) => setClassDate(e.target.value)}
        />

        <label>Class Time:</label>
        <input
          type="time"
          value={classTime}
          onChange={(e) => setClassTime(e.target.value)}
        />
        <label>End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <button type="submit">Schedule Class</button>
      </form>
    </div>
  );
}

export default ScheduleClasses;
    
