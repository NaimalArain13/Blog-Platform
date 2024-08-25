"use client";
import blogPosts from "@/app/_lib/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Post({ params }: { params: { blogid: string } }) {
  const blogid = parseInt(params.blogid, 10);

  const post = blogPosts.find((p) => p.id === blogid);

  const [activeComment, setactiveComment] = useState<number | null>(null);

  if (!post) {
    return (
      <div className="justify-center size-full flex pt-40 bg-slate-300 min-h-screen text-4xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen px-3 py-2">
      <div className="max-w-4xl mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            width={896}
            height={0}
            className="w-full h-auto object-cover rounded-t-lg"
          />

        <h1 className="text-md sm:font-bold text-5xl text-blue-950 mt-4">
          Title: {post.title}
        </h1>
        <p className="text-blue-900 mb-8">by {post.author}</p>
        <div className="prose text-black lg:prose-xl mb-12 text-justify">{post.content}</div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Comments:</h2>
        <ul className="space-y-4">
          {post.comments.map((comment) => (
            <li key={comment.id} className="border-t border-gray-200 pt-4">
              <p
                className="text-blue-600 hover:underline hover:text-black text-sm"
                onClick={() =>
                  setactiveComment(
                    activeComment === comment.id ? null : comment.id
                  )
                }
              >
                {comment.author}- {comment.content}
              </p>
              {activeComment === comment.id && (
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Replies:</h3>

                  {comment.replies.map((reply) => (
                    <Link href={`/blogs/${post.id}/comments/${comment.id}`} key={reply.id}>
                      {" "}
                      <li key={reply.id}>
                        <b>{reply.author}</b>- {reply.content}
                      </li>
                    </Link>
                  ))}
                </div>
              )}
          <Link href={`/blogs/${post.id}/comments/${comment.id}`} >View Comment Details</Link>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
