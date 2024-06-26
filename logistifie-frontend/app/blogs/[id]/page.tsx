import { BlogPost } from "@/utils/types";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCircleArrowLeft, FaCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

async function getBlogById(id: number) {
  try {
    const api = process.env.API_URL || "http://localhost:4000/api";
    const response = await axios.get(`${api}/blogs/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    } else {
      throw error;
    }
  }
}

export default async function Page({ params }: { params: { id: number } }) {
  const blog: BlogPost = await getBlogById(params.id);
  return (
    <section className="flex-1 flex flex-col  p-4 my-2 container mx-auto">
      <Link href={"/blogs"} className="flex items-center mb-2 text-lf-50">
        <FaCircleArrowLeft className="text-xs md:text-sm mr-2" />
        <p className="text-xs md:text-sm font-semibold">Go Back</p>
      </Link>
      <div className="grid grid-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 lg:col-span-2   ">
          <p className="text-xl md:text-5xl border-b border-lf-300 pb-4 ">
            {blog.title}
          </p>
          <div className="mt-4  px-4">
            <div>
              <Image
                src={blog.image_url}
                alt={blog.title}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="text-xs md:text-base mt-4">
              <p>{blog.summary}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-lf-500 p-8 rounded-lg ">
            <div className="flex items-center  mt-1">
              <FaCircleUser className="mr-4 text-sm md:text-lg" />
              <p className="text-sm md:text-lg text-gray-200">Admin</p>
            </div>
            <div className="flex items-center  mt-1">
              <SlCalender className="mr-4 text-sm md:text-lg" />
              <p className="text-sm md:text-lg text-gray-200">
                {moment(blog.publication_date).format("LL")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
