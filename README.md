# Commander Bootstrap

This project provides a way to skip the setup and instantly start building a commander CLI tool.

## Commands

To view all current commands run:
`yarn start help`

1. `yarn start detach_git`  
   This will reset your local git repository. Useful after recently cloning from the public repository.

2. `yarn start create_command <command_name>`  
   This will create a new .command.ts file in the `src/commands` folder. All `.command.ts` files are automatically registered for the CLI. Then you can invoke your new command with `yarn start <command_name>`.

## Get Started

1. `git clone https://github.com/Nazaire/commander-bootstrap`
2. `cd commander-bootstrap`
3. `yarn`
4. `yarn start detach_git`

You now have a project base ready for you to start adding new commands.

You can quickly add a new command with `yarn start create_command <command_name>`
