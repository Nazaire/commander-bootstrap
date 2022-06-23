import { program } from "commander";
import fs from "fs";
import path from "path";
import { camelCase, snakeCase } from "lodash";

program
  .command("init_command <command_name>")
  .description("Initialises a new command in this project.")
  .action(async (commandName) => {
    let nameCamel = camelCase(commandName);
    let nameSnake = snakeCase(commandName);
    fs.writeFileSync(
      path.join(__dirname, `${nameCamel}.command.ts`),
      COMMAND_TEMPLATE(nameSnake)
    );
  });

const COMMAND_TEMPLATE = (commandName: string) =>
  `import { program } from "commander";

// See https://github.com/tj/commander.js for more options
program.command("${commandName}")
.description("Please write a description for ${commandName}")
.action( async () => {
  // write your command here.
})`;
