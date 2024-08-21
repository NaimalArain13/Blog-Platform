"use client";
import Link from "next/link";
import blogPost from "../_lib/data";
import { Post } from "../_lib/data";
import { useState } from "react";
import Image from "next/image";

export default function BlogPost() {
  const data: Post[] = blogPost;
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 6
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = data.slice(indexOfFirstPost , indexOfLastPost)
  return (
    <div className="relative">
    <div className="bg-neutral-100 min-h-screen py-10">
      <div className="max-w-7xl sm:h-full w-auto mx-auto">
        <h1 className="text-5xl py-5 bg-gradient-to-r from-blue-950 to-cyan-500  hover:text-white mb-6 font-bold text-center">Blog Posts</h1>
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        {currentPosts.map((blog) => (
          <div key={blog.id} className="p-6 bg-neutral-200 rounded-lg shadow-md transition-transform hover:scale-95">
            {blog.image && (
        <div className="mb-4 flex-shrink-0">
          <Image
            src={blog.image}
            alt={"ssf"}
            width={1280} 
            height={300} 
            className="w-full object-cover rounded-t-lg"
          />
        </div>
      )}
            <Link href={`/blogs/${blog.id}`}>
              <i className="block hover:underline">

                <h2 className="font-semibold text-lg md:font-bold text-blue-950 mb-2 md:text-2xl">Title: {blog.title}</h2></i>
                <p className="text-black">{blog.content.substring(0,50)}...</p>
                
              <p className="mt-2 text-sm text-gray-400">by {blog.author}</p>
              <div className=" pt-4"><button className=" rounded-md p-1 bg-blue-900 hover:bg-blue-950 text-white text-md">Read more</button></div>
              
            </Link>
          </div>
        ))}
      
      </div> 
    </div>
    <div className="flex justify-center space-x-4 my-6">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-md text-white font-semibold ${
      currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-950'
    }`}
  >
    Previous
  </button>
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={indexOfLastPost >= data.length}
    className={`px-4 py-2 rounded-md text-white font-semibold ${
      indexOfLastPost >= data.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-950'
    }`}
  >
    Next
  </button>
</div>

    </div>
    </div>
  );
}
