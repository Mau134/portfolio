import React from 'react';
import "./works.css";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'>LoremElit esse adipisicing ipsum nisi in ut incididunt ipsum. 
            Ut ex enim veniam id sit eiusmod nulla culpa et ad ea non. Est nulla nulla incididunt exercitation. Dolor commodo
             mollit nulla adipisicing ea minim non.</span>
        <div className='worksimgs'>
            <img src={Portfolio1} alt='' className='worksImg' />
            <img src={Portfolio2} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
            <img src={Portfolio4} alt='' className='worksImg' />
            <img src={Portfolio5} alt='' className='worksImg' />
            <img src={Portfolio6} alt='' className='worksImg' />
        </div>
    </section>
  );
}

export default works