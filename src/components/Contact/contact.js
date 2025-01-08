import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';


const Contact = () => {
  return (
    <section className='contactpage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                LoremElit
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Clients' className='clientImg'/>
                <img src={Microsoft} alt='Clients' className='clientImg'/>
                <img src={Adobe} alt='Clients' className='clientImg'/>
                <img src={Facebook} alt='Clients' className='clientImg'/>

            </div>
        </div>

        <div id='contact'>

        </div>
    </section>
  )
}

export default Contact