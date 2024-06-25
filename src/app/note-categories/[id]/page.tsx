"use client";
import React from "react";

import categories from "../../categories";
const Page = ({ params }: any) => {
  const id = decodeURIComponent(params.id);

  const category = categories.find((cat) => cat.title === id);

  if (!category) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        Category not found
      </div>
    );
  }
  return (
    <div className="h-screen bg-black  ">
      <div className="w-96 flex flex-col mt-5  h-96 mx-auto  p-5 text-white border border-gray-700 border-w-1  rounded-lg shadow-sm bg-black">
        <h1 className="text-center text-2xl">{params.id}</h1>
        {category.items.map((item, index) => (
          <p key={index} className="mb-2">
            • {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page;
