"use client";
import Link from "next/link";
import blogPost from "../_lib/data";
import { Post } from "../_lib/data";
import { useState } from "react";

export default function BlogPost() {
  const data: Post[] = blogPost;
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 6
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = data.slice(indexOfFirstPost , indexOfLastPost)
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl text-gray-900 mb-6 font-bold text-center">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      
        {currentPosts.map((blog) => (
          <div key={blog.id} className="p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <Link href={`/blogs/${blog.id}`}>
              <i className="block hover:underline">
                <h2 className="font-bold text-gray-800 mb-2 text-2xl">Title: {blog.title}</h2></i>
                <p className="text-gray-600">{blog.content.substring(0,50)}...</p>
              <p className="mt-2 text-sm text-gray-500">by {blog.author}</p>
            </Link>
          </div>
        ))}
      
      </div> 
    </div>
    <div className="flex justify-center space-x-4 my-4">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-md text-white font-semibold ${
      currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
    }`}
  >
    Previous
  </button>
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={indexOfLastPost >= data.length}
    className={`px-4 py-2 rounded-md text-white font-semibold ${
      indexOfLastPost >= data.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
    }`}
  >
    Next
  </button>
</div>

    </div>
  );
}
