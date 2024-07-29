import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="mt-48 text-center justify-center items-center">
        <Button asChild className="bg-cyan-400">
          <Link href="/documents/nayan" className="text-blue-950">Click Me</Link>
        </Button>
      </div>
    </main>
  );
}
