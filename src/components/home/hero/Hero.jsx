import React from 'react'
import "./hero.css"
import Title from '../../title/Title'

const Hero = props => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO EDUNEXT' title='Best Online Education'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id eveniet debitis consequuntur nesciunt explicabo eum autem veritatis vel expedita tenetur, quo praesentium repellat, aliquam natus voluptatem, nostrum vitae fugiat!</p>
            <div className="button">
              <button className='primary-btn'>
                GET STARTED NOW 
              </button>
              <button>
                VIEW COURSE 
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  )
}

Hero.propTypes = {}

export default Hero