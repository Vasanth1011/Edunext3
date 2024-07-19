import React from 'react';
import Back from '../common/back/Back';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './courses.css';
import { courses } from '../../dummydata';

const EnrollDetails = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);

  const courseArray = courses.filter(course => course.id === courseId);
  const course = courseArray[0];

  return (
    <>
      <Back title='Enroll Now' />
      <section className='enrolldetails'>
        <div className='empty'></div>
        <div className='container grid2'>
          {courses.map((val) => (
            <div className='items' key={val.id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {Array.isArray(val.courTeacher) && val.courTeacher.map((details) => (
                      <div className='box' key={details.name}>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default EnrollDetails;
