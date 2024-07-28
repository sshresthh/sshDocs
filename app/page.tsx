import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>sshDocs</h1>
        <Button asChild Link="/documents/1" className="bg-red-500 hover:bg-blue-500">Click Me</Button>
      </div>
    </main>
  );
}
