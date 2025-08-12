"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

interface CloseSectionProps {
  children: React.ReactNode;
  name: string;
}

const CloseSection = ({ children, name }: CloseSectionProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex flex-col mt-5 w-60 gap-5 border-t-1 border-black/10">
      <div className="font-secondary mt-5 text-[20px]  h-7 font-bold  capitalize flex justify-between">
        <span>{name}</span>
        <span onClick={handleToggle} className="text-secondary cursor-pointer">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      <div className="">{isOpen && children}</div>
    </section>
  );
};

export default CloseSection;
