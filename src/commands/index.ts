import { exitCommand } from './exit.js'
import { helpCommand } from './help.js'
import type { CommandRegistry } from './types.js'

const commandRegistry: CommandRegistry = {
  exit: {
    name: 'exit',
    description: 'Exits the Pokedex',
    callback: exitCommand
  },
  help: {
    name: 'help',
    description: 'Displays help information',
    callback: helpCommand
  }
}

export const getCommands = (): CommandRegistry => commandRegistry
