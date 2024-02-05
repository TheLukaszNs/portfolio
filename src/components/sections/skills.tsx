import { Badge } from "../ui/badge";

export const Skills = () => {
  return (
    <section className="flex flex-col justify-center mt-24 font-mono gap-4">
      <h1 className="text-3xl font-black mb-4">Skills</h1>

      <div className="flex flex-row flex-wrap gap-2">
        <Badge>React</Badge>
        <Badge>React Native</Badge>
        <Badge>Next.js</Badge>
        <Badge>Expo</Badge>
        <Badge>Node.js</Badge>
        <Badge>Express</Badge>
        <Badge>TypeScript</Badge>
        <Badge>Prisma</Badge>
        <Badge>JavaScript</Badge>
      </div>
    </section>
  );
};
