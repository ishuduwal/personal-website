import React from 'react'
import { Link } from 'react-router-dom';
import todo from '../../assets/Todo.png'

export const Todo = () => {
    return (
      <>
      <div className='todo'>
      <div className='project-info'>
                <p className='project-header'>Techmart</p>
                <p>This is my first MERN based project.</p>
                <p>The "CRUD To-Do List" app is a straightforward and minimalist task management tool that focuses on the core operations of Create, Read, Update, and Delete (CRUD) for tasks or to-do items.
                    It is easy for users to add new tasks, view existing ones, update their status, and remove completed or unnecessary items. One can practice this for better experience.
                </p>
                <p className='project-header'>Images:</p>
                <img src={todo} className='project-img' alt='techmart'/>
                <p className='project-header'>Code:</p>
                <p><Link to='https://github.com/ishuduwal/todolist' className='github-link'>Github</Link> Enjoy the code.</p>
            </div> 
      </div>
      </>

  )
}
