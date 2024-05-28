import { Analytics } from "@/components/home/Analytics";
import { DownloadApp } from "@/components/home/DownloadApp";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";
import { WorksAndServices } from "@/components/home/WorksAndServices";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-1">
      <Hero />
      <DownloadApp />
      <Analytics />
      <WorksAndServices />
      <Locations />
    </main>
  );
}
