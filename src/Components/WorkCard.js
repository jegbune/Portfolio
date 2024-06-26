import React from 'react'
import './WorkCardStyles.css'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
    
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt='product' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details' >
            <p>{props.text}</p>
            <div className='pro-btns'>
                <NavLink to={ props.view} className='btn'>VIEW</NavLink>
                <NavLink to='' className='btn'>SOURCE</NavLink>
            </div>
        </div>


    {/* { Projects.map(project => {
            <div className='project-card' key={ProductImage.id}>
                <img src={project.imgsrc} alt='product' />
                    <h2 className='project-title'>{project.title}</h2>
                        <div className='pro-details'>
                            <p>{project.text}</p>
                    <div className='pro-btns'>
                        <NavLink to='' className='btn'>VIEW</NavLink>
                        <NavLink to='' className='btn'>SOURCE</NavLink>
                    </div>
                </div>
            </div>
        })
    } */}

</div>
            
                   
                       
                
     

       
  )
}

export default WorkCard
