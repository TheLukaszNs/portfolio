import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

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
    <Link
      className="dark:shadow-black shadow-none hover:shadow-xl hover:shadow-stone-100 flex flex-col gap-4 p-4 border border-accent rounded-lg transition-shadow duration-200"
      href={href}
      target="_blank"
    >
      <span className="text-2xl font-bold">{title}</span>
      <span className="text-sm">{description}</span>
    </Link>
  );
};
