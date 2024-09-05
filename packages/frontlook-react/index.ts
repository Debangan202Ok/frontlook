#!/usr/bin/env node

/***
 *
 * ---------PLEASE DO NOT MODIFY THIS PACKAGE---------
 *
 ***/

import chalk from "chalk";
import prompts from "prompts";
import degit from "degit";
import { PRM_CSS, PRM_LANG, PRM_LEVEL } from "./config";

const log = console.log;

async function main() {
  const package_info = {
    lang: "js",
    level: "basic",
    framework: "mui",
  };

  log(chalk.cyanBright("> Welcome to Frontlook-React 🚀"));
  log("@ Choose Your Preference:");

  // Language pickup
  await prompts({
    type: "select",
    name: "lang",
    message: "Pick a Language",
    choices: PRM_LANG.choice,
    initial: 1,
    hint: PRM_LANG.hints,
  }).then((prmLang) => {
    if (!prmLang.lang) {
      process.exit(0);
    }
    package_info["lang"] = prmLang.lang;
  });

  await prompts({
    type: "select",
    name: "level",
    message: "Choose project level",
    choices: PRM_LEVEL.choice,
    initial: 1,
    hint: PRM_LEVEL.hints,
  }).then((prmLevel) => {
    if (!prmLevel.level) {
      process.exit(0);
    }
    package_info["level"] = prmLevel.level;
    if (prmLevel.level === "bas") {
      prompts({
        type: "select",
        name: "css",
        message: "Choose a css framework",
        choices: PRM_CSS.choice,
        initial: 1,
      }).then((prmCss) => {
        if (!prmCss.css) {
          process.exit(0);
        }
        package_info["framework"] = prmCss.css;
        generateBasic(package_info, "fro");
      });
    }
  });
}

main();

async function generateBasic(
  pkg: { lang: string; framework: string },
  projectName: string
) {
  if (pkg.lang === "js" && pkg.framework === "tailwind") {
    try {
      const emitter = degit(
        "https://github.com/Debangan202Ok/frontlook/templates/react-tailwind-js",
        {
          cache: false,
          force: true,
        }
      );
      await emitter.clone(projectName);
    } catch (err) {
      console.error("Something went wrong! Please try again letter.");
    }
  }
}
