'use client'
import { useState } from 'react';

const OptionsList = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [selectedOption, setSelectedOption] = useState<number>();

  const handleOptionClick = (index:number) => {
    setSelectedOption(index);
  };

  return (
    <ul className="grid grid-cols-4 gap-4">
      {options.map((option, index) => (
        <li
          key={index}
          className={`cursor-pointer p-2 border rounded transition-transform transform hover:scale-105 duration-300 ${
            selectedOption === index ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleOptionClick(index)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default OptionsList;
