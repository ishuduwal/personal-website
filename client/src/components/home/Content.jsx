import React from 'react';
import './Home.css';

export const Content = () => {
  return (
    <>
      <div className='home'>
        <div className='introduction'>
          <p className='head-line'>About Me:</p>
          <p>Hello, I am ishuduwal, a passionate web developer from Nepal.</p>
          <p>I find immense joy in crafting web experiences. Currently, I'm on a journey pursuing my bachelor's degree.</p>
          <p>My fascination with web development started in 2022, and since then, I've been working on a handful of exciting projects.</p>
          <p className='head-line'>Skills:</p>
          <p>My technical skills include:</p>
          <div className='skill'>
            <p>HTML, CSS, SCSS, Javascript, C, React.js, Figma, SQL, Tailwind</p>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <p>I'm actively developing my skills as a front-end developer, and in the future, I aspire to become a full-stack developer. To achieve this goal, I've chosen the MERN stack as my current area of specialization.</p>
          <p className='head-line'>Blog:</p>
          <p>Check out my blog where I share insights on web development topics and my experiences. Additionally, I enjoy penning down thoughts on the books I read and my personal reflections.</p>
          <p className='head-line'>More:</p>
          <p>Beyond coding, you'll often find me pursuing various interests and hobbies. I play futsal- it's my way of having fun and staying active. When I'm not coding or playing sports, I read philosophy books, which is fascinating.</p>
          <p>And, I'm a Manchester United fan, so I rarely miss their games. One of my favorite things to do is travel. I make it a personal goal to visit new places every year. These experiences, from sports to philosophy to exploring new destinations, all contribute to my life.</p>
        </div>
      </div>
    </>
  );
};
