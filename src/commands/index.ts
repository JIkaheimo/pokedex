import { exitCommand } from './exit.js'

export interface CLICommand {
  readonly name: string
  readonly description: string
  readonly callback: (commands: CommandRegistry) => void
}

const commandRegistry = {
  exit: {
    name: 'exit',
    description: 'Exits the Pokedex',
    callback: exitCommand
  }
} as const

export type CommandRegistry = typeof commandRegistry

export const getCommands = (): CommandRegistry => commandRegistry
