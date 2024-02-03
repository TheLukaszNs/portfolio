import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-48 py-24">
      <nav className="flex flex-row items-center gap-2 font-mono">
        <Link href="/" className="text-lg relative">
          {/* <div className="absolute z-[-2] -left-10 top-10 h-8 bg-cyan-600 w-32 blur-[128px]" /> */}
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
        <ul className="flex flex-row gap-8 text-stone-400 px-16 py-3 border rounded-full border-stone-700 mx-auto">
          <li className="text-stone-200 font-bold">home</li>
          <li>resume</li>
          <li>blog</li>
        </ul>
        <div className="w-16 h-8 bg-stone-950 rounded-full border border-stone-800"></div>
      </nav>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-mono text-5xl font-black">
          Łukasz Myśliwiec
          <br />
        </h1>
        <div className="mt-4 text-lg">
          I create things for the{" "}
          <div className="inline-block text-cyan-400 bg-stone-900 mx-1 px-2 py-1 rounded-md font-mono font-bold">
            web
          </div>{" "}
          and{" "}
          <div className="inline-block text-cyan-400 bg-stone-900 ml-1 px-2 py-1 rounded-md font-mono font-bold">
            mobile
          </div>
        </div>
      </div>
    </main>
  );
}
