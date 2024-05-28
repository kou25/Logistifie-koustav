import { Analytics } from "@/components/home/Analytics";
import { DownloadApp } from "@/components/home/DownloadApp";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-1">
      <Hero />
      <DownloadApp />
      <Analytics />
    </main>
  );
}
