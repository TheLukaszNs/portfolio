import { ReactNode } from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

export const Work = () => {
  return (
    <section className="flex flex-col justify-center mt-24 font-mono gap-4">
      <h1 className="text-3xl font-black mb-4">Work</h1>
      <Item
        company="Helfio"
        time="December 2021 - Present"
        title="React Native Developer"
      >
        created a beautiful, award-winning mobile application focused on
        improving users&apos; health and helping prevent cardiovascular
        diseases.
        <ul className="list-disc list-inside gap-2 flex flex-col">
          <li>
            remodelled state management solution, created a custom
            state-management library, and supervised a team of young developers
          </li>
          <li>
            introduced type-safe solutions within the app codebase using
            TypeScript
          </li>
          <li>
            conducted code reviews and mentored junior developers to improve
            code quality and ensure adherence to best practices
          </li>
        </ul>
      </Item>
      <Item
        company="Freelance"
        time="January 2020 - December 2021"
        title="React Developer"
      >
        completed and worked on various projects including mobile applications,
        a library of UI components and websites. each project received 5 out of
        5 stars and positive public feedback. Worked in teams as well as solo.
      </Item>
    </section>
  );
};

const Item = ({
  children,
  time,
  company,
  title,
}: {
  company: string;
  time: string;
  children?: ReactNode;
  title: string;
}) => {
  return (
    <Card>
      <div className="flex flex-row gap-4 items-center">
        <span className="text-2xl font-bold">{company}</span>
        <div className="px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-900 text-sm">
          {time}
        </div>
      </div>
      <div className="font-semibold mb-2">{title}</div>
      {children}
    </Card>
  );
};
