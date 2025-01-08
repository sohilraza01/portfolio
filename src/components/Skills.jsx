import React from 'react'
import skills from './data/skills.json';
const Skills = () => {
  return (
    <div>
      <div className="container skills" id='skilss'>
        <h1>SKILLS</h1>
        <div  className='items'>
        {
          skills.map((data,index)=>{
            return <>
              <div className="item" key={index}
               data-aos="flip-left"
      data-aod-duration="1000"
              >
                <img src={`/src/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Skills
