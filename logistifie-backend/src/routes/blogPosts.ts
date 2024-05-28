import { Router, Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";
import { BlogPost } from "../utils/types";

const router = Router();

// Helper function to read blog posts from the JSON file
const readBlogPosts = async (): Promise<BlogPost[]> => {
  const filePath = path.join(__dirname, "../db/blogPosts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data) as BlogPost[];
};

router.get("/", async (req: Request, res: Response) => {
  try {
    const blogPosts = await readBlogPosts();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).send("Sorry! No blog posts");
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const blogPosts = await readBlogPosts();
    const postId = parseInt(req.params.id, 10);
    const post = blogPosts.find((p) => p.id === postId);

    if (post) {
      res.json(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send("Sorry! No blog posts");
  }
});

export default router;
