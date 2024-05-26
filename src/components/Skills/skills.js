import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>
        What I do
      </span>
      <span className='skillDesc'>
        I am fluent in PHP, HTML, CSS/SCSS, JavaScript and C++ programming languages. When it comes to database technologies, I am skilled in MYSQL. I am also familiar with frameworks such as Reactjs. I have hands on experience with the Internet of Things (IoT) technologies, having worked with technologies such as Arduino, ESP82 and RFID reader in my final year. I am also familiar in working with collaborative environments such as github for projects.
      </span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>Reprehenderit id elit aliquip aliquip dolore esse. Aute eu in labore labore dolor qui fugiat. Excepteur culpa adipisicing excepteur culpa adipisicing reprehenderit adipisicing quis eu incididunt consectetur labore. Deserunt ea ut nostrud est occaecat. Culpa sint commodo nostrud aliqua ullamco ea dolore proident elit non eu.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='Web Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>Labore non dolor anim aliquip tempor culpa incididunt eu et dolore laborum officia. Incididunt ex excepteur qui incididunt dolor. Qui elit ullamco consequat sit proident mollit proident laboris labore consectetur enim. Qui amet quis eu pariatur aliquip aliquip ut eu ipsum. Id exercitation nisi cupidatat aliqua sint velit Lorem excepteur aliqua in. Consectetur officia tempor tempor esse tempor anim proident. Nulla et commodo quis aliqua mollit quis enim enim mollit.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='App Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Application Design</h2>
            <p>Irure tempor laboris labore laboris dolor amet. Cillum irure deserunt incididunt duis incididunt non amet pariatur aliquip. Nulla anim commodo qui proident incididunt aliquip culpa ut. Fugiat laboris laborum in elit ipsum ipsum pariatur id sit. Aute do occaecat mollit cillum quis adipisicing. Aute mollit velit ipsum duis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills