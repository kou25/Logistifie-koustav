import { Button } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h2 className="text-2xl mb-4">Sorry! No Blog found.</h2>
      <Link className="text-lf-50" href="/">
        <Button label="Return Home" />
      </Link>
    </div>
  );
}
