export const cleanInput = (input: string): string[] => {
  return input.trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(word => word.toLowerCase().trim())
}
