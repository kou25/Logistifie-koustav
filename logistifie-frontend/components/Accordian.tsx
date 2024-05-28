"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick
}) => {
  return (
    <div
      className="mb-4 rounded-lg bg-lf-500 p-2 md:p-4 w-full md:w-[70vw] text-lf-25 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-2 md:p-4 focus:outline-none w-full">
        <span className="text-base">{title}</span>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <div className="p-2 text-xs">{content}</div>}
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
