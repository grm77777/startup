import React from 'react';
import './assignments.css'

export function Assignments() {
  return (
    <main>
      <h1 className="header">Hayley's Assignments</h1>
      <h2 className="table-title">Courses</h2>
      <table>
        <thead>
          <tr>
            <th className="table-header">Number</th>
            <th className="table-header">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="course-rel">REL A 275</td>
            <td className="course-rel">Teachings and Doctrines of the Book of Mormon</td>
          </tr>
          <tr>
            <td className="course-ml">CS 270</td>
            <td className="course-ml">Introduction to Machine Learning</td>
          </tr>
          <tr>
            <td className="course-wp">CS 260</td>
            <td className="course-wp">Web Programming</td>
          </tr>
          <tr>
            <td className="course-alg">CS 312</td>
            <td className="course-alg">Algorithm Design and Analysis</td>
          </tr>
        </tbody>
      </table>

      <h2 className="table-title">Assignments</h2>
      <table>
        <thead>
          <tr>
            <th className="table-header">Completed?</th>
            <th className="table-header">Name</th>
            <th className="table-header">Course</th>
            <th className="table-header">Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>Startup Specification</td>
            <td>CS 260</td>
            <td>Sept 10</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>AI Policy</td>
            <td>CS 270</td>
            <td>Sept 12</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>Chapter 1</td>
            <td>CS 270</td>
            <td>Sept 12</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>classNameification Models</td>
            <td>CS 270</td>
            <td>Sept 12</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>Weekly Quiz 1</td>
            <td>REL A 275</td>
            <td>Sept 15</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>Attendance 9/8</td>
            <td>REL A 275</td>
            <td>Sept 15</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>RSA Homework 2: ModExp</td>
            <td>CS 312</td>
            <td>Sept 16</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}