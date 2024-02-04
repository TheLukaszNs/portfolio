import { ReactNode } from "react";

export const Work = () => {
  return (
    <section className="flex flex-col justify-center mt-24 font-mono gap-4">
      <h1 className="text-3xl font-black mb-4">Work</h1>
      <Item title="Helfio" time="December 2021 - Present">
        Created a beautiful, award-winning mobile application focused on
        improving users&apos; health and helping prevent cardiovascular
        diseases.
        <ul className="list-disc list-inside gap-2 flex flex-col">
          <li>
            Remodelled state management solution, created a custom
            state-management library, and supervised a team of young developers
          </li>
          <li>
            Introduced type-safe solutions within the app codebase using
            TypeScript
          </li>
          <li>
            Conducted code reviews and mentored junior developers to improve
            code quality and ensure adherence to best practices
          </li>
        </ul>
      </Item>
      <Item title="Freelance" time="January 2020 - December 2021">
        Completed and worked on various projects including mobile applications,
        a library of UI components and websites. Each project received 5 out of
        5 stars and positive public feedback. Worked in teams as well as solo.
      </Item>
    </section>
  );
};

const Item = ({
  children,
  time,
  title,
}: {
  title: string;
  time: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 p-4 border border-accent rounded-lg">
      <div className="flex flex-row gap-4 items-center">
        <span className="text-2xl font-bold">{title}</span>
        <div className="px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-900 text-sm">
          {time}
        </div>
      </div>
      {children}
    </div>
  );
};
