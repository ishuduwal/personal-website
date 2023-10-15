import React from 'react';
import { Link } from 'react-router-dom';
import techmart from '../../assets/Techmart.png';
import grid from '../../assets/Grid.png';
import laptop from '../../assets/Laptop.png';
import user from '../../assets/User.png';
export const Techmart = () => {
    return (
      <>
        <div className='techmart'>
            <div className='project-info'>
                <p className='project-header'>Techmart</p>
                <p>Offers a wide range of products, including laptops, gaming consoles, and accessories. The website has a user registration process,
                    enabling its users to create an account to access buying features. The system is fully responsive in mobile, tablets and desktop.
                    Techmart was my ambitious project during the fourth semester of my college.
                </p>
                <p>
                    It reflects my deep passion for technology and entrepreneurship, sparked by the dynamic realm of e-commerce.
                </p>
                <p className='project-header'>Images:</p>
                <img src={techmart} className='project-img' alt='techmart'/>
                <img src={grid} className='project-img' alt='grid'/>
                <img src={laptop} className='project-img' alt='laptop'/>
                <img src={user} className='project-img' alt='user'/>
                <p className='project-header'>Code:</p>
                <p><Link to='https://github.com/ishuduwal/4th-semester-Ecommerce' className='github-link'>Github</Link> Enjoy the code.</p>
            </div>
        </div>
      </>
  )
}
