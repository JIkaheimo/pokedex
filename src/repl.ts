import { createInterface } from 'node:readline'

export const startREPL = (): void => {
  // PLACEHOLDER
  createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > '
  })
}

export const cleanInput = (input: string): string[] => {
  if (input.trim().length === 0) {
    return []
  }

  return input
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(word => word.toLowerCase().trim())
}
