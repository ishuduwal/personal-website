import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

export const Project = () => {
  return (
    <>
      <div className='project'>
        <div className='project-list'>
          <div className='project-one'>
              <p className='head-line'><Link className='link-project' to='/techmart'>Techmart</Link></p>
              <p>Techmart is an Ecommerce website. It offers a wide range of laptops, accessories, and gaming consoles.
                This project taught me a lot about MERN...
              </p>
          </div>
          <div className='project-one'>
              <p className='head-line'><Link className='link-project' to='/todo'>Todo-app</Link></p>
              <p>To-do app allow users to create, edit, and organize tasks or to-do items.</p>
          </div>
        </div>
      </div>
    </>
  )
}
