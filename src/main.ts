import glob from "glob";
import { program } from "commander";
import path from "path";
import { readJSON } from "~/utils/readJSON";

require("dotenv-flow").config();

export async function main() {
  // set version
  const { version, name, description } = readJSON(
    path.join(__dirname, "../package.json")
  );

  program.name("yarn start");
  program.description(description);
  program.version(version || "0.0.0");

  // auto register all .command.ts files

  const commands = glob.sync(path.join(__dirname, "commands/*.command.ts"));

  await Promise.all(commands.map((f) => import(f)));

  await program.parseAsync(process.argv);
}

main();
