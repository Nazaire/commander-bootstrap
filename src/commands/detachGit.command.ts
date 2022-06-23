import { program } from "commander";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// See https://github.com/tj/commander.js for more options
program
  .command("detach_git")
  .description("Resets the current git project and removes the current origin.")
  .action(async () => {
    // write your command here.

    if (fs.existsSync(path.join(__dirname, "../../.git"))) {
      console.log(`Removing existing .git folder...`);
      fs.rmSync(path.join(__dirname, "../../.git"), {
        recursive: true,
        force: true,
      });
    }

    execSync("git init", { stdio: "inherit" });

    execSync("git status", { stdio: "inherit" });
  });
