import React from 'react';
import "./courses.css";
import { coursesCard } from '../../dummydata';
import { Link } from 'react-router-dom';

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='empty'></div>
        <div className="container grid2">
          {coursesCard.map((val) => {
            return (
              <div className="items" key={val.id}>
                <div className="content flex">
                  <div className="left"></div>
                  <div className="text">
                    <h1>{val.coursesName}</h1>
                    <div className="details">
                      {val.courTeacher.map((details, index) => (
                        <React.Fragment key={index}>
                          <div className="box">
                            <div className="dimg">
                              <img src={details.dcover} alt="" />
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to={`/enroll/${val.id}`}>
                  <button className="outline-btn">ENROLL NOW !</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <div className="marigin"></div>
    </>
  );
}

export default CoursesCard;
