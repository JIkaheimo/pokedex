import type { CLICommand } from './types'

export const exitCommand: CLICommand['callback'] = (): void => {
  console.log('Closing the Pokedex... Goodbye!')
  process.exit(0)
}
