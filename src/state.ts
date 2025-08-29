import { createInterface, type Interface } from 'readline'
import { getCommands } from './commands/index.js'
import type { CLICommand } from './commands/types.js'

export interface State {
  readline: Interface
  commands: Record<string, CLICommand>
}

export const initState = (): State => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'pokedex > '
  })

  return {
    readline: rl,
    commands: getCommands()
  }
}
