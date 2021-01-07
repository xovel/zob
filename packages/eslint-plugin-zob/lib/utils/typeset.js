'use strict'

const unicodeList = [
  '\\u1100-\\u11FF',
  '\\u2E80-\\u2EFF',
  '\\u2F00-\\u2FDF',
  '\\u2FF0-\\u2FFF',
  '\\u3000-\\u303F',
  '\\u3040-\\u309F',
  '\\u30A0-\\u30FF',
  '\\u3100-\\u312F',
  '\\u3130-\\u318F',
  '\\u3190-\\u319F',
  '\\u31A0-\\u31BF',
  '\\u31C0-\\u31EF',
  '\\u31F0-\\u31FF',
  '\\u3200-\\u32FF',
  '\\u3300-\\u33FF',
  '\\u3400-\\u4DBF',
  '\\u4DC0-\\u4DFF',
  '\\u4E00-\\u9FFF',
  '\\uAC00-\\uD7AF',
  '\\uF900-\\uFAFF'
]

const punctuation = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g

const cjk = `[${unicodeList.join('')}]`

function regex(input) {
  let source = input.source || input
  const flags = input.flags || ''
  source = source.replace(/cjk/g, cjk).replace(/punctuation/g, punctuation)
  return new RegExp(source, flags)
}

const fixer = {
  cjk,
  punctuation: /(cjk) *([~!;,?]+) */g,
  punctuationSpecial: /(cjk) *([:.]) *(cjk)/g,
  quote: /(cjk)(['"])(.*?)(\2)/g,
  colon: /(cjk): *([A-Za-z0-9()])/g,
  conversation: /(cjk) *[:：] *(['"])(.*?)(\2)/g,
  hashTopic: /(cjk)(#cjk+#)(cjk)/g,
  operator: /(cjk)([-+*=/\\|<>&])([A-Za-z0-9])/g,
  operatorAhead: /([A-Za-z0-9])([-+*=/\\|<>&])(cjk)/g,
  bracket: /(cjk)([()[\]{}])(cjk)/g,
  middleDot: /(cjk) *[\u00b7\u2022\u2027] *(cjk)/g,
  percent: /(%)([A-Za-z])/g,
  alphabet: /(cjk)([A-Za-z])/g,
  alphabetAhead: /([A-Za-z])(cjk)/g,
  number: /(cjk)([0-9])/g,
  numberAhead: /([0-9])(cjk)/g,
  symbol: /(cjk)(punctuation)/g,
  symbolAhead: /(punctuation)(cjk)/g
}

Object.keys(fixer).forEach(key => {
  fixer[key] = regex(fixer[key])
})

const fullWidthCharMap = {
  '~': '\uFF5E',
  '!': '\uFF01',
  ';': '\uFF1B',
  ':': '\uFF1A',
  ',': '\uFF0C',
  '.': '\u3002',
  '?': '\uFF1F',
  '(': '\uFF08',
  ')': '\uFF09',
  '[': '\u3010',
  ']': '\u3011',
  '{': '\uFF5B',
  '}': '\uFF5D',
  '<': '\u300A',
  '>': '\u300B'
}

const reSinleWidthChar = /[~!;:,.?]/g

function replaceFullWidthChar(text) {
  return text.replace(reSinleWidthChar, char => fullWidthCharMap[char])
}

function addSpace(...args) {
  return args.slice(1, -2).join(' ')
}

const defaults = {
  alphabet: true,
  number: true,
  symbol: true
}

function typeset(text, config) {

  if (!text || !fixer.cjk.test(text)) {
    return text
  }

  const options = {
    ...defaults,
    ...config
  }

  const COLON = '\uFF1A'
  const SINGLE_QUOTE_OPEN = '\u2018'
  const SINGLE_QUOTE_CLOSE = '\u2019'
  const DOUBLE_QUOTE_OPEN = '\u201C'
  const DOUBLE_QUOTE_CLOSE = '\u201D'
  const MIDDLE_DOT = '\u30FB'

  let result = text

  if (options.punctuation) {
    result = result.replace(fixer.punctuation, (_, cjk, punctuation) => cjk + replaceFullWidthChar(punctuation))
    result = result.replace(fixer.punctuationSpecial, (_, cjkLeft, punctuation, cjkRight) => cjkLeft + fullWidthCharMap[punctuation] + cjkRight)
  }

  if (options.quote) {
    result = result.replace(fixer.quote, (_, cjk, quoteLeft, content) => {
      if (quoteLeft === '"') {
        return cjk + (options.doubleQuote || DOUBLE_QUOTE_OPEN) + content + (options.doubleQuoteClose || DOUBLE_QUOTE_CLOSE)
      }
      return cjk + (options.singleQuote || SINGLE_QUOTE_OPEN) + content + (options.singleQuoteClose || SINGLE_QUOTE_CLOSE)
    })
  }

  if (options.colon) {
    result = result.replace(fixer.colon, (_, cjk, char) => cjk + COLON + char)
  }

  if (options.conversation) {
    result = result.replace(fixer.conversation, (_, cjk, quoteLeft, content) => {
      if (quoteLeft === '"') {
        return cjk + COLON + (options.doubleQuote || DOUBLE_QUOTE_OPEN) + content + (options.doubleQuoteClose || DOUBLE_QUOTE_CLOSE)
      }
      return cjk + COLON + (options.singleQuote || SINGLE_QUOTE_OPEN) + content + (options.singleQuoteClose || SINGLE_QUOTE_CLOSE)
    })
  }

  if (options.hashTopic) {
    result = result.replace(fixer.hashTopic, addSpace)
  }

  if (options.operator) {
    result = result.replace(fixer.operator, addSpace)
    result = result.replace(fixer.operatorAhead, addSpace)
  }

  if (options.bracket) {
    result = result.replace(fixer.bracket, (_, cjkLeft, bracket, cjkRight) => cjkLeft + fullWidthCharMap[bracket] + cjkRight)
  }

  if (options.middleDot) {
    result = result.replace(fixer.middleDot, (_, cjkLeft, cjkRight) => cjkLeft + MIDDLE_DOT + cjkRight)
  }

  if (options.percent) {
    result = result.replace(fixer.percent, addSpace)
  }

  if (options.alphabet) {
    result = result.replace(fixer.alphabet, addSpace)
    result = result.replace(fixer.alphabetAhead, addSpace)
  }

  if (options.number) {
    result = result.replace(fixer.number, addSpace)
    result = result.replace(fixer.numberAhead, addSpace)
  }

  if (options.symbol) {
    result = result.replace(fixer.symbol, addSpace)
    result = result.replace(fixer.symbolAhead, addSpace)
  }

  return result
}

module.exports = typeset
