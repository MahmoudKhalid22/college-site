import Image from "next/image";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Years from "./components/Years";

export default function Home() {
  return (
    <main className="px-8">
      <Hero />
      <Service />
      <Years />
    </main>
  );
}
