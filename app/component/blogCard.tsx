
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  content: string;
  id: number;
  image: string;
}

export default function BlogCard({ title, content, id, image }:CardProps){
  return (
    <div className="bg-neutral-100 text-blue-950 p-4 border border-[#f8f5f4] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      
        <div className="mb-4 flex-shrink-0">
          <Image
            alt={title} 
            src={image}
            width={300} 
            height={200} 
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </div>
    
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-black mb-4">{content}</p>
      </div>
      <div className="mt-auto text-left">
        <Link
          href={`/blogs/${id}`} // Link to the dynamic blog post
          className="inline-block bg-blue-900 text-white  py-2 px-4 rounded-lg hover:bg-blue-950 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>

  );
};
