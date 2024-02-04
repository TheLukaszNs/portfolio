import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Card } from "../ui/card";
import { Github } from "lucide-react";

export const Projects = () => {
  return (
    <section className="flex flex-col justify-center mt-24 font-mono gap-4">
      <h1 className="text-3xl font-black mb-4">
        Projects
        <br />
      </h1>

      <Item
        title="QRestaurant"
        description="qrestaurant is an integrated system for restaurant ownerts and their customers. the system allows the staff to create a virtual menu, from which the customer can order. all is based on qr codes"
        href="https://github.com/teamqr/qrestaurant"
      />
      <Item
        title="Dzbanban"
        description="multi-platform kanban table implementation for mobile devices"
        href="https://github.com/Pichi00/kanbanTable"
      />
      <Item
        title="modo"
        description="modo is a simple, yet powerful, multiplatform movie todo app for mobile devices"
        href="https://github.com/TheLukaszNs/modo"
      />

      <Link
        href="https://github.com/TheLukaszNs"
        target="_blank"
        className="flex flex-row gap-2 self-center dark:text-stone-600 dark:hover:text-stone-200 transition-colors duration-200 text-stone-400 hover:text-stone-800 items-center text-sm"
      >
        more on github <Github />
      </Link>
    </section>
  );
};

const Item = ({
  description,
  title,
  href,
}: {
  title: string;
  description: string;
  href: Url;
}) => {
  return (
    <Link href={href} target="_blank">
      <Card className="dark:shadow-black shadow-none hover:shadow-2xl hover:shadow-stone-100 transition-shadow duration-200">
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-sm">{description}</span>
      </Card>
    </Link>
  );
};
