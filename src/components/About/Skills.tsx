const technologies = [
  {
    category: "Frontend Development",
    items: [
      "React",
      "Next.js",
      "Javascript",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "ShadcnUI",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Python",
      "Express",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    category: "Fullstack Development",
    items: ["Next.js App Router", "Next.js Server Actions"],
  },
  {
    category: "Deployment",
    items: ["VPS", "Docker", "Jenkins", "CircleCI"],
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitLab", "Bitbucket"],
  },
  {
    category: "Testing",
    items: [
      "Cypress",
      "Playwright",
      "React Testing Library",
      "Postman",
      "Insomnia",
      "Storybook",
    ],
  },
  {
    category: "Scrum & Collaboration",
    items: ["Confluence", "Jira", "Slack"],
  },
];

const Skills = () => {
  const SkillList = technologies.flatMap((tech) => tech.items);
  return (
    <section className="flex flex-col border-dark lg:px-28 lg:py-20 p-5 sm:p-12 md:p-16 xs:p-10 border-b-2 dark:border-light border-solid w-full text-dark dark:text-light">
      <span className="font-semibold text-accent text-lg sm:text-3xl md:text-4xl dark:text-accentDark">
        I'm comfortable in...
      </span>
      <ul className="flex flex-wrap justify-center xs:justify-start mt-8">
        {SkillList.map((item, index) => (
          <li
            key={index}
            className="inline-block border-2 border-dark mr-3 md:mr-6 xs:mr-4 mb-3 md:mb-6 xs:mb-4 px-4 sm:px-8 lg:px-12 xs:px-6 py-2 sm:py-4 lg:py-5 xs:py-3 dark:border-light border-solid rounded font-semibold dark:font-normal text-base sm:text-xl md:text-2xl xs:text-lg capitalize hover:scale-105 transition-all duration-200 cursor-pointer ease"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
