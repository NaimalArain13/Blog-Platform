"use client";

import Link from "next/link";
import blogPost from "../_lib/data";
import { Post } from "../_lib/data";
import { useState } from "react";
import BlogCard from "../component/blogCard";

export default function BlogPost() {
  const data: Post[] = blogPost;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-neutral-100 min-h-screen py-10">
      <div className="max-w-7xl w-auto mx-auto">
        <h1 className="text-5xl py-5 bg-gradient-to-r from-blue-950 to-cyan-400 hover:text-white mb-6 font-bold text-center">
          Blog Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              content={post.content.substring(0, 100) + "..."} // Display first 100 characters
              id={post.id} // Pass postId here
              image={post.image} // Pass image URL here
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4 my-6">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-950"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastPost >= data.length}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            indexOfLastPost >= data.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-950"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
