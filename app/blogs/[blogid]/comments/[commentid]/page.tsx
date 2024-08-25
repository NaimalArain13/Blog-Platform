import blogPosts from "@/app/_lib/data";

export default function CommmentReplies({
  params,
}: {
  params: { blogid: string; commentid: string };
}) {
  const postid = parseInt(params.blogid, 10);
  const commentid = parseInt(params.commentid, 10);
  const post = blogPosts.find((p) => p.id === postid);
  const comment = post?.comments.find((c) => c.id === commentid);
  if (!post || !comment)
    return (
      <div className="justify-center size-full flex pt-40 bg-neutral-100 min-h-screen text-4xl">
        No Comment Found
      </div>
    );
  return (
    <div className="bg-neutral-100 min-h-screen py-10">
      <div className="max-w-full ">
       <h1 className="text-2xl py-3 md:text-5xl md:py-5 bg-gradient-to-r from-blue-950 to-cyan-400  hover:text-white mb-6 font-bold text-center">Comments Thread and Replies</h1>
        <p className="font-sm text-2xl  mb-6 pt-10 text-blue-800">
          Replies to <u className="text-black">{comment.content}</u> by <b className="text-blue-900">{comment.author}</b>
        </p>
        <ol>
          {comment.replies.map((reply) => (
            <li key={reply.id}>

              {reply.content} by <b className="text-blue-900">{reply.author}</b>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
