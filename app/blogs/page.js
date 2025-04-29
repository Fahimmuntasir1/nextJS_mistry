import getPosts from "@/lib/getposts";
import Link from "next/link";

export default async function Blogs() {
  const posts = await getPosts();
  return (
    <div className="">
      <h1 className="text-2xl font-bold bg-blue-950 pt-1 pb-1">
        Trending Blogs :{" "}
      </h1>
      <ul>
        {posts.map((blog) => (
          <li
            className="mt-2 mb-2 p-5 hover:text-lg transition-all duration-200"
            key={blog.id}
          >
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
