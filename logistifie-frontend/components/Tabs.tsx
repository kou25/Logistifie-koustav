"use client";
import React, { useState, ReactElement, FC, MouseEvent } from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className=" mx-auto flex flex-col items-center">
      <div className="flex  min-w-full lg:min-w-[50vw]">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b border-lf-100"
                : "border-b border-gray-300"
            } flex-1 text-lf-25 text-xs font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: FC<TabProps> = ({ label, children }) => {
  return <div data-label={label}>{children}</div>;
};

export { Tabs, Tab };
