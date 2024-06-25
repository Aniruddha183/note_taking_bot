"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import categories from "../categories";
const Page = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const data = await response.json();
      setNotes(data);
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen bg-black p-6">
      <Head>
        <title>Notes Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: any, index: any) => (
          <div
            key={index}
            className="bg-black border h-[150px] border-gray-800 border-w-1 text-card-foreground rounded-lg shadow-sm"
          >
            <Link href={`/note-categories/${category.title}`}>
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-lg text-white font-semibold leading-none tracking-tight mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground overflow-hidden flex-grow">
                  {category.items.map((item: any, itemIndex: any) => (
                    <li key={itemIndex} className="flex items-center ">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Page;
