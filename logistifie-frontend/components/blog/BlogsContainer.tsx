"use client";
import React, { useCallback, useMemo, useState } from "react";
import { SearchBar } from "../SearchBar";
import { BlogPost } from "@/utils/types";
import { BlogItem } from "./BlogItem";
import { debounce } from "lodash";

export const BlogsContainer = ({ blogs }: { blogs: BlogPost[] }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  const handleSearchChange = (e: string) => {
    debouncedSetSearchTerm(e);
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]);

  return (
    <div className="bg-lf-500 p-2 h-auto min-h-[70vh]">
      <div className="py-8 pt-2 p-4 container mx-auto">
        <div className="flex justify-end mb-4 h-full">
          <SearchBar onSearch={handleSearchChange} />
        </div>
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {filteredBlogs.map((blog: BlogPost) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-8">Sorry ! No blogs found</div>
        )}
      </div>
    </div>
  );
};
