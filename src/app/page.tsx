import { Projects } from "@/components/sections/projects";
import { Work } from "@/components/sections/work";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { Github, Instagram, Linkedin, Pin, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-24 mx-12 md:mx-auto md:w-4/5 lg:w-2/3 xl:w-1/2">
      <nav className="flex flex-row items-center gap-4 font-mono">
        <Link href="/" className="text-2xl md:text-lg relative mx-auto md:mx-0">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-10 -left-10 z-[-1] blur-3xl w-32 h-32 text-cyan-400"
          >
            <path
              fill="currentColor"
              d="M40.8,-38.9C57,-35.1,76.9,-26.1,77.1,-15.1C77.2,-4.1,57.6,8.9,43.6,17.7C29.6,26.6,21.4,31.2,12.5,34.5C3.7,37.7,-5.6,39.5,-15.8,38.1C-26,36.7,-37,32.2,-44.9,23.5C-52.8,14.8,-57.5,1.9,-59.3,-14.3C-61,-30.5,-59.7,-50,-49.3,-54.8C-38.9,-59.5,-19.4,-49.5,-3.6,-45.3C12.3,-41,24.7,-42.6,40.8,-38.9Z"
              transform="translate(100 100)"
            />
          </svg>
          mysliwiec.
        </Link>
        <ul className="md:flex flex-row gap-12 text-stone-400 px-16 h-12 items-center border rounded-full border-accent ml-auto hidden">
          <li className="dark:text-stone-200 text-stone-600 font-bold">
            portfolio
          </li>
          <li>resume</li>
          <li>blog</li>
        </ul>

        <ThemeToggle />
      </nav>

      <div className="flex flex-col-reverse gap-8 sm:flex-row md:items-center mt-48 justify-between font-mono">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-3xl font-black">
            Łukasz Myśliwiec
            <br />
          </h1>
          <div className="mt-4">
            I create things for{" "}
            <div className="inline-block text-cyan-400 bg-stone-100 dark:bg-stone-900 mx-1 px-2 py-1 rounded-md font-mono font-bold">
              web
            </div>{" "}
            and{" "}
            <div className="inline-block text-cyan-400 bg-stone-100 dark:bg-stone-900 ml-1 px-2 py-1 rounded-md font-mono font-bold">
              mobile
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Pin className="w-4 h-4" />
            <span>Gliwice, Poland</span>
          </div>
          <div className=" flex flex-row gap-4 mt-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/lukasz-mysliwiec/"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.instagram.com/thelukaszns2/"
                target="_blank"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.github.com/thelukaszns" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Image
          className="rounded-xl shadow-2xl shadow-stone-400 dark:shadow-black w-[100px] aspect-square sm:w-[200px]"
          src="/me.JPG"
          width={200}
          height={200}
          alt="Hey, it's me"
          priority
        />
      </div>

      <Projects />

      <Work />
    </main>
  );
}
