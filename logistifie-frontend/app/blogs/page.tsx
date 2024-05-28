import { BlogsContainer } from "@/components/blog/BlogsContainer";
import { BlogPost } from "@/utils/types";
import axios from "axios";

async function getBlogs() {
  const response = await axios.get("http://localhost:4000/api/blogs");
  return response.data;
}

export default async function Page() {
  const blogs: BlogPost[] = await getBlogs();

  return (
    <section className="flex-1 flex flex-col ">
      <div className="py-8 p-4 container mx-auto">
        <h3 className="text-4xl font-medium mb-4">Blogs</h3>
        <p className="text-sm">
          Feel free to explore our insightful blogs and discover a world of
          knowledge and inspiration.
        </p>
      </div>
      <BlogsContainer blogs={blogs} />
    </section>
  );
}
