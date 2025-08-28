import { describe, expect, it } from 'vitest'
import { cleanInput } from './repl'

describe.each([
  {
    input: '  ',
    expected: []
  },
  {
    input: '  hello  ',
    expected: ['hello']
  },
  {
    input: '  hello  world  ',
    expected: ['hello', 'world']
  },
  {
    input: '  HellO  World  ',
    expected: ['hello', 'world']
  }
])('cleanInput($input)', ({ input, expected }) => {
  it(`Expected: ${expected.join(',')}`, () => {
    const actual = cleanInput(input)

    expect(actual).toHaveLength(expected.length)
    expect(actual).toStrictEqual(expected)
  })
})
