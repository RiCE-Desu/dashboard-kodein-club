import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>
        Hello World !
      </h1>
      <button onClick={() => window.location.href = '/login'}>Click HERE !</button>
    </div>
  );
}
