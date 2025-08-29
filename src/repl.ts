import * as _ from 'lodash-es'
import { createInterface } from 'node:readline'
import { getCommands } from './commands/index.js'
import type { CLICommand } from './commands/types.js'

export const startREPL = (): void => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'pokedex > '
  })

  rl.prompt()

  rl.on('line', (input) => {
    const words = cleanInput(input)

    if (words.length === 0) {
      rl.prompt()
      return
    }

    const commandName = words[0]

    const commands = getCommands()
    const command = _.get(commands, commandName) as CLICommand | undefined

    if (command != null) {
      command.callback(commands)
    } else {
      console.log(`Unknown command: ${commandName}`)
    }

    rl.prompt()
  })
}

export const cleanInput = (input: string): string[] =>
  input
    .toLowerCase()
    .trim()
    .split(' ')
    .filter((word) => word !== '')
