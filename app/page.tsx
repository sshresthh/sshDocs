import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>sshDocs</h1>
        <Button asChild>
          <Link href="/documents/nayan">Click Me</Link>
        </Button>
      </div>
    </main>
  );
}
