import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div>
        <Image
          src={"/./image.jpg"}
          objectFit={"cover"}
          alt="blog"
          width={1350}
          height={0}
          className="opacity-70 absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion"
        />
      </div>
      <div>
        <h1 className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-5xl font-extrabold text-rose-800 flex justify-center p-10">
          <Link href={"../blogs"}>Go to Blog Posts</Link>
        </h1>
        
        {/* <h1 className="hover:transition-all text-5xl pt-60 flex justify-center font-bold text-black relative z-10">
     
     </h1> */}
      
      </div>
    </div>
  );
}
