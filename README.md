# Commander Bootstrap

This project provides a way to skip the setup and instantly start building a commander CLI tool.

## Commands

To view all current commands run:
`yarn start help`

1. `yarn start detch_git`  
   This will reset your local git repository. Useful after recently cloning from the public repository.

2. `yarn start create_command <command_name>`  
   This will create a new .command.ts file in the `src/commands` folder. All `.command.ts` files are automatically registered for the CLI. Then you can invoke your new command with `yarn start <command_name>`.
