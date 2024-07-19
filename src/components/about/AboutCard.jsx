import React from 'react'
import { file } from '../assets/index'
import Title from '../title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
    <section className='aboutHome'>
      <div className="container flexSB">
        <div className="left row">
          <img src={ file } alt="" />
        </div>
        <div className="right row">
          <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
          <div className="items">{homeAbout.map((val, index) =>(
            <div className="item flexSB" key = {index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}</div>
        </div>
      </div>
    </section>
    <AWrapper />
    </>
  )
}

export default AboutCard