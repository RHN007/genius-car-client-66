import React from 'react';
import person from '../../../assets/images/about_us/person.jpg' 
import parts from '../../../assets/images/about_us/parts.jpg' 
import useTitle from '../../../hooks/useTitle';

const About = () => {
  useTitle('About')
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className=' relative w-1/2'>
    <img src={person} className="max-w-sm w-4/5 h-full rounded-lg shadow-2xl" alt='' />
    <img src={parts} className="right-5 top-1/2 absolute w-3/5 max-w-sm rounded-lg shadow-2xl border-8" alt='' />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl text-orange-600 font-bold'>About Us</p>
      <h1 className="text-5xl font-bold my-5">We are qualified & of experience in this field</h1>
      <p className="py-6 text-stone-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6 text-stone-500 pt-0">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn btn-error text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;