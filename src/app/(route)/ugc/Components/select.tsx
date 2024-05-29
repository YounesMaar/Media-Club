"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { initialItems } from "@/constants";
const ShadowBox = styled.div`
  transition: background-color 0.3s;
`;

interface Item {
  id: number;
  isVisible: boolean;
  color: boolean;
  title: string;
  content: string;
}

function Select() {
  

  const [items, setItems] = useState<Item[]>(initialItems);

  const handleToggleClick = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, isVisible: !item.isVisible, color: !item.color }
          : item
      )
    );
  };

  return (
    <div>
      <div className='container mt-10 flex flex-col gap-y-5'>
        {items.map((item) => (
          <ShadowBox
            key={item.id}
            className={`container ${
              item.color ? "bg-black" : "bg-white"
            } w-full ${item.isVisible ? "toggle" : ""} border-2 border-black`}>
            <div
              className={`flex justify-between h-20 items-center ${
                item.color ? "text-white" : "text-black"
              }`}>
              <h1 className='underline md:text-2xl  text-lg uppercase font-mono flex items-center gap-x-2'>
                <FaStar className='' />
                {item.title}
              </h1>
              <h1
                className='text-5xl cursor-pointer'
                onClick={() => handleToggleClick(item.id)}>
                {item.isVisible ? "-" : "+"}
              </h1>
            </div>
            <div className={`content ${item.isVisible ? "" : "hidden"} py-5`}>
              <p>{item.content}</p>
            </div>
          </ShadowBox>
        ))}
      </div>
      
    </div>
  );
}

export default Select;
