import React, { useState } from 'react';
import Burger from '../assets/menu-burger.png';
import Account from '../assets/user-pen.png';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ['Jannuary 2023', 'Febuary 2023', 'March 2023', 'April 2023', 'May 2023','June 2023',
  'July 2023','August 2023','September 2023','October 2023','November 2023','December2023'];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gradient-to-bl from-pink-500 to-yellow-400 via-blue-500 h-screen flex flex-col">
      <div className="flex justify-between mt-10">
        <div className="ml-5">
          <img src={Burger} alt="Burger Menu" />
        </div>
        <div className="mr-10">
          <span className="rounded-full bg-black h-10 w-10 block"></span>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="ml-5 font-bold">
          <select className="rounded-lg w-44 h-12 bg-slate-300 text-center" value={selectedOption} onChange={handleSelectChange}>
            <option value="option1"><img src={Account} alt="accounts"/>Accounts 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="flex font-bold items-center mr-8">
          <span className="w-8 h-8 bg-slate-300 rounded-full mr-3"></span>
          <select className="rounded-lg w-40 h-8 bg-slate-300 text-center flex" value={selectedOption1} onChange={handleSelectChange1}>
            <option value="option1"><img src={Account} alt="accounts"/>Post Status</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
          <select className="rounded-lg w-40 h-8 bg-slate-300 text-center flex ml-3" value={selectedOption2} onChange={handleSelectChange2}>
            <option value="option1"><img src={Account} alt="accounts"/>Post Type</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between mt-8 mr-5">
      <div className="flex relative ml-5 font-bold text-2xl">
        <button className="" onClick={handlePrev}>&lt;</button>
        <div className="mx-3 my-2 text-white">{items[currentIndex]}</div>
        <button className="" onClick={handleNext}>&gt;</button>
      </div>
      <div className="w-60 h-10 drop-shadow-lg bg-gradient-to-t from-transparent to-gray-600 rounded-full shadow-inner ">
          <span><button className={`px-4 py-2 rounded-full ${selectedOption === 'DAY' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('DAY')}>DAY</button></span>
          <span><button className={`px-4 py-2 rounded-full ${selectedOption === 'WEEK' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('WEEK')}>WEEK</button></span>
          <span><button className={`px-6 py-2 rounded-full ${selectedOption === 'MONTH' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('MONTH')}>MONTH</button></span>
        </div>
      </div>
      <div className=" flex justify-between text-xl gap-10 mt-5 ml">
          <span className="w-28 bg-black">
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Monday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Monday')}>Monday</button></span>
          <span>
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Tuesday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Tuesday')}>Tuesday</button></span>
          <span>
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Wednesday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Wednesday')}>Wednesday</button></span>
          <span>
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Thursday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Thursday')}>Thursday</button></span>
          <span>
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Friday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Friday')}>Friday</button></span>
          <span>
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Saturday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Saturday')}>Saturday</button></span>
          <span>
            <button className={`px-6 py-3 rounded-lg ${selectedOption === 'Sunday' ? 'bg-slate-300 text-black' : 'bg-inherit text-white'}`} onClick={() => setSelectedOption('Sunday')}>Sunday</button></span>
      </div>
    </div>
  );
};

export default Dropdown;
