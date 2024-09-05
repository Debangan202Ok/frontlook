import chalk from "chalk";

export const PRM_LANG = {
  choice: [
    {
      title: chalk.cyanBright("Typescript"),
      description:
        "Whole project will run on typescript strict mode (Recommanded)",
      value: "ts",
    },
    { title: chalk.yellow("Javascript"), value: "js" },
  ],
  hints: "- use an arrows to move and Space/Enter to select",
};

export const PRM_LEVEL = {
  choice: [
    {
      title: chalk.yellow("Beginner"),
      description: "[ minimal configuration with vite 🚀 ]",
      value: "bas",
    },
    {
      title: chalk.cyanBright("Intermediate"),
      description: "[ simplistic configuration with mui & axios 🚀 ]",
      value: "int",
    },
    {
      title: chalk.blueBright("Advance"),
      description:
        "[ customized configuration with mui & axios, redux, rtk-query 🚀 ]",
      value: "adv",
    },
  ],
  hints: "- use arrows to move and Space/Enter to select",
};

export const PRM_CSS = {
  choice: [
    {
      title: chalk.yellow("tailwind"),
      value: "tailwind",
    },
    {
      title: chalk.cyanBright("material-ui"),
      value: "mui",
    },
  ],
  hints: "- use arrows to move and Space/Enter to select",
};
