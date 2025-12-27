/* eslint-disable */

import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { beforeEach, expect, test } from '@jest/globals'

import reverse from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh')
  expect(reverse('')).toEqual('')
});

test('reverse', () => {
  const text = readFile('lore.txt').trim()
  const result = readFile('lore_reverse.txt')

  expect(reverse(text)).toEqual(result)
})

