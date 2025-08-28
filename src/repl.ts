export const cleanInput = (input: string): string[] => {
  return input.split(' ')
    .map(word => word.toLowerCase().trim())
};
