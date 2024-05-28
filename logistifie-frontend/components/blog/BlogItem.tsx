import { BlogPost } from "@/utils/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

export const BlogItem = ({ blog }: { blog: BlogPost }) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="bg-lf-300  rounded-lg shadow-md flex flex-col cursor-pointer"
    >
      <div>
        <Image
          src={blog.image_url}
          alt="blog image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-t-lg w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{blog.title}</h3>
        <div className="flex items-center  mt-1">
          <FaCircleUser className="mr-1 text-sm" />
          <p className="text-xs text-gray-200">
            Admin - {moment(blog.publication_date).format("LL")}
          </p>
        </div>
        <p className="text-xs mt-4 mb-2 text-gray-300 ">
          {blog.summary.length > 130
            ? blog.summary.slice(0, 130) + "..."
            : blog.summary}
        </p>
        <div className="text-xs text-lf-50 hover:underline cursor-pointer">
          <p>{`Read more >`}</p>
        </div>
      </div>
    </Link>
  );
};
