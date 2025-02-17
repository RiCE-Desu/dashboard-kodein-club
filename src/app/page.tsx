import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-4xl">
        Hello World !
      </h1>
      <Button><a href="/login">Click Here!</a></Button>
    </div>
  );
}
