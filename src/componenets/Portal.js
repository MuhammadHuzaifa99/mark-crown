import React, { useState } from 'react';
import Burger from '../assets/menu-burger.png';
import Account from '../assets/user-pen.png';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-gradient-to-bl from-pink-500 to-yellow-400 via-blue-500 h-screen">
      <div className="flex justify-between">
      <div className="mt-10 ml-5">
        <img src={Burger} alt="Burger Menu" />
      </div>
      <div className="mt-10 mr-5">
        <span className="rounded-full bg-black h-10 w-10 block"></span>
      </div>
      </div>
      <div className="">
      <div className="mt-10 ml-5 flex flex-row">
        <select className=" rounded-lg w-40 h-10 bg-slate-300 text-center" value={selectedOption} onChange={handleSelectChange}>
          <option value="option1"><img src={Account} alt="accounts"/>Accounts 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <div className="mr-5 flex flex-row-reverse">
        <span>
        <select className="rounded-lg w-40 h-8 bg-slate-300 text-center flex  " value={selectedOption} onChange={handleSelectChange}>
           <option value="option1"><img src={Account} alt="accounts"/>Accounts 1</option>
           <option value="option2">Option 2</option>
           <option value="option3">Option 3</option>
           <option value="option4">Option 4</option>
        </select>
        </span>
        <span>
        <select className="rounded-lg w-40 h-8 bg-slate-300 text-center flex  " value={selectedOption} onChange={handleSelectChange}>
           <option value="option1"><img src={Account} alt="accounts"/>Accounts 1</option>
           <option value="option2">Option 2</option>
           <option value="option3">Option 3</option>
           <option value="option4">Option 4</option>
        </select>
        </span>
      </div>
     

      </div>
    </div>
  );
};

export default Dropdown;
