
export interface CLICommand {
  readonly name: string
  readonly description: string
  readonly callback: (commands: CommandRegistry) => void
}

export type CommandRegistry = Record<string, CLICommand>
