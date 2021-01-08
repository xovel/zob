'use strict'

// 在中文字和半形的英文、数字、符号之间插入空白

// 统一表意文字的正则表达式
const reUnifiedIdeograph = /\p{Unified_Ideograph}/u

// 鉴于 `\p` 和 `u` 标记符的兼容性堪忧，采用枚举的方式进行，缺点为如果 Unicode 标准调整，需要同步进行修订。

// <!--
const unicodeList = [
  '\\u1100-\\u11FF', // 谚文 Hangul Jamo
  '\\u2E80-\\u2EFF', // 中日韩汉字部首补充 CJK Radicals Supplement
  '\\u2F00-\\u2FDF', // 康熙部首 Kangxi Radicals
  '\\u2FF0-\\u2FFF', // 表意文字描述字符 Ideographic Description Characters
  '\\u3000-\\u303F', // CJK 符号和标点 CJK Symbols and Punctuation
  '\\u3040-\\u309F', // 平假名 Hiragana
  '\\u30A0-\\u30FF', // 片假名 Katakana
  '\\u3100-\\u312F', // 注音 Bopomofo
  '\\u3130-\\u318F', // 朝鲜文兼容字母 Hangul Compatibility Jamo
  '\\u3190-\\u319F', // 象形字注释标志 Kanbun
  '\\u31A0-\\u31BF', // 注音字母扩展 Bopomofo Extended
  '\\u31C0-\\u31EF', // CJK 笔画 CJK Strokes
  '\\u31F0-\\u31FF', // 日文片假名语音扩展 Katakana Phonetic Extensions
  '\\u3200-\\u32FF', // 封闭式 CJK 文字和月份 Enclosed CJK Letters and Months
  '\\u3300-\\u33FF', // CJK 兼容 CJK Compatibility
  '\\u3400-\\u4DBF', // CJK 统一表意符号扩展 A (CJK Unified Ideographs Extension A)
  '\\u4DC0-\\u4DFF', // 易经六十四卦符号 Yijing Hexagram Symbols
  '\\u4E00-\\u9FFF', // CJK 统一表意符号，中文字符 (CJK Unified Ideographs)
  '\\uAC00-\\uD7AF', // 朝鲜文音节 Hangul Syllables
  '\\uF900-\\uFAFF'  // CJK 兼容象形文字 CJK Compatibility Ideograph
]
// -->

const cjkUnicodeSymbolList = [
  '\\uFE30-\\uFE4F', // CJK 兼容形式竖排样式的横排字符 CJK Compatibility Forms
  '\\uFF00-\\uFFEF'  // 半型及全型形式 Halfwidth and Fullwidth Forms
]

const unicodeExtList = [
  '\\u{1D300}-\\u{1D35F}', // 太玄经符号 Tai Xuan Jing Symbols,
  '\\u{20000}-\\u{2A6DF}', // Ext-B
  '\\u{2A700}-\\u{2B73F}', // Ext-C
  '\\u{2B740}-\\u{2B81F}', // Ext-D
  '\\u{2B820}-\\u{2CEAF}', // Ext-E
  '\\u{2CEB0}-\\u{2EBEF}', // Ext-F
  '\\u{2F800}-\\u{2FA1F}', // CJK Compatibility Ideographs Supplement
]

function fn(s) {
  const [a, b] = s.replace(/\\u/g, '0x').split('-').map(item => parseInt(item));
  console.log([a, b])
  for (let i = a; i <= b; i++) console.log(i, String.fromCharCode(i))
}

/*
Plane 0, BMP (basic multilingual plane), U+0000 ~ U+FFFF, 包括了大多数的常用字符都在该平面中，以及少量的古语和罕见字符，也包括 CJK (中日统韩一表意文字).
Plane 1, SMP (supplementary multilingual plane), U+10000 ~ U+1FFFF, 包括了一些较为不常见的字符，如哥特体，萧伯纳 (Shavian) 字母，音乐符号，古希腊文，以及麻将，扑克，中国象棋等等.
Plane 2, SIP (supplementary ideographic plane), U+20000 ~ U+2FFFF, 一些更加罕见的 CJK 字符.
Plane 14, SSP (supplementary special-purpose plane), 一些不在 BMP 平面内的格式控制字符.
Plane 15/16 (private use planes), 这两个平面包含共计 131,068 个字符，扩充 BMP 中 6,400 个 private-use 码点.
*/

/*
Unicode 编码范围　
  0000-007F：C0 控制符及基本拉丁文 (C0 Control and Basic Latin)
  0080-00FF：C1 控制符及拉丁文补充 - 1 (C1 Control and Latin 1 Supplement)
  0100-017F：拉丁文扩展 - A (Latin Extended-A)
  0180-024F：拉丁文扩展 - B (Latin Extended-B)
  0250-02AF：国际音标扩展 (IPA Extensions)
  02B0-02FF：空白修饰字母 (Spacing Modifiers)
  0300-036F：结合用读音符号 (Combining Diacritics Marks)
  0370-03FF：希腊文及科普特文 (Greek and Coptic)
  0400-04FF：西里尔字母 (Cyrillic)
  0500-052F：西里尔字母补充 (Cyrillic Supplement)
  0530-058F：亚美尼亚语 (Armenian)
  0590-05FF：希伯来文 (Hebrew)
  0600-06FF：阿拉伯文 (Arabic)
  0700-074F：叙利亚文 (Syriac)
  0750-077F：阿拉伯文补充 (Arabic Supplement)
  0780-07BF：马尔代夫语 (Thaana)
  07C0-077F：西非书面语言 (N'Ko)
  0800-085F：阿维斯塔语及巴列维语 (Avestan and Pahlavi)
  0860-087F：曼达语 （Mandaic）
  0880-08AF：撒马利亚语 (Samaritan)
  0900-097F：天城文书 (Devanagari)
  0980-09FF：孟加拉语 (Bengali)
  0A00-0A7F：锡克教文 (Gurmukhi)
  0A80-0AFF：古吉拉特文 (Gujarati)
  0B00-0B7F：奥里亚文 (Oriya)
  0B80-0BFF：泰米尔文 (Tamil)
  0C00-0C7F：泰卢固文 (Telugu)
  0C80-0CFF：卡纳达文 (Kannada)
  0D00-0D7F：德拉维族语 (Malayalam)
  0D80-0DFF：僧伽罗语 (Sinhala)
  0E00-0E7F：泰文 (Thai)
  0E80-0EFF：老挝文 (Lao)
  0F00-0FFF：藏文 (Tibetan)
  1000-109F：缅甸语 (Myanmar)
  10A0-10FF：格鲁吉亚语 (Georgian)
  1100-11FF：朝鲜文 (Hangul Jamo)
  1200-137F：埃塞俄比亚语 (Ethiopic)
  1380-139F：埃塞俄比亚语补充 (Ethiopic Supplement)
  13A0-13FF：切罗基语 (Cherokee)
  1400-167F：统一加拿大土著语音节 (Unified Canadian Aboriginal Syllabics)
  1680-169F：欧甘字母 (Ogham)
  16A0-16FF：如尼文 (Runic)
  1700-171F：塔加拉语 (Tagalog)
  1720-173F：哈努诺语（Hanunóo）
  1740-175F：部希德文字符（Buhid）
  1760-177F：塔格巴努亚文字符（Tagbanwa）
  1780-17FF：高棉语 (Khmer)
  1800-18AF：蒙古文 (Mongolian)
  18B0-18FF：沙姆（Cham）
  1900-194F：林布（Limbu）
  1950-197F：德宏泰语 (Tai Le)
  1980-19DF：新傣仂语 (New Tai Lue)
  19E0-19FF：高棉语记号 (Kmer Symbols)
  1A00-1A1F：布吉文（Buginese）
  1A20-1A5F：巴达克（Batak）
  1A80-1AEF：兰纳（Lanna）
  1B00-1B7F：巴厘语 (Balinese)
  1B80-1BB0：巽他语 (Sundanese)
  1BC0-1BFF：杨松录苗文（Pahawh Hmong）
  1C00-1C4F：雷布查语 (Lepcha)
  1C50-1C7F：桑塔利文 （Ol Chiki）
  1C80-1CDF：曼尼普尔语 (Meithei/Manipuri)
  1D00-1D7F：语音学扩展 (Phonetic Extensions)
  1D80-1DBF：语音学扩展补充 (Phonetic ExtensionsSupplement)
  1DC0-1DFF：结合用读音符号补充 (Combining DiacriticsMarks Supplement)
  1E00-1EFF：拉丁文扩充附加 (Latin Extended Additional)
  1F00-1FFF：希腊语扩充 (Greek Extended)
  2000-206F：常用标点 (General Punctuation)
  2070-209F：上标及下标 (Superscripts and Subscripts)
  20A0-20CF：货币符号 (Currency Symbols)
  20D0-20FF：组合用记号 (Combining Diacritics Marksfor Symbols)
  2100-214F：字母式符号 (Letterlike Symbols)
  2150-218F：数字形式 (Number Form)
  2190-21FF：箭头 (Arrows)
  2200-22FF：数学运算符 (Mathematical Operator)
  2300-23FF：杂项工业符号 (Miscellaneous Technical)
  2400-243F：控制图片 (Control Pictures)
  2440-245F：光学识别符 (Optical Character Recognition)
  2460-24FF：封闭式字母数字 (Enclosed Alphanumerics)
  2500-257F：制表符 (Box Drawing)
  2580-259F：方块元素 (Block Element)
  25A0-25FF：几何图形 (Geometric Shapes)
  2600-26FF：杂项符号 (Miscellaneous Symbols)
  2700-27BF：印刷符号 (Dingbats)
  27C0-27EF：杂项数学符号 - A (MiscellaneousMathematical Symbols-A)
  27F0-27FF：追加箭头 - A (Supplemental Arrows-A)
  2800-28FF：盲文点字模型 (Braille Patterns)
  2900-297F：追加箭头 - B (Supplemental Arrows-B)
  2980-29FF：杂项数学符号 - B (MiscellaneousMathematical Symbols-B)
  2A00-2AFF：追加数学运算符 (Supplemental MathematicalOperator)
  2B00-2BFF：杂项符号和箭头 (Miscellaneous Symbols andArrows)
  2C00-2C5F：格拉哥里字母 (Glagolitic)
  2C60-2C7F：拉丁文扩展 - C (Latin Extended-C)
  2C80-2CFF：古埃及语 (Coptic)
  2D00-2D2F：格鲁吉亚语补充 (Georgian Supplement)
  2D30-2D7F：提非纳文 (Tifinagh)
  2D80-2DDF：埃塞俄比亚语扩展 (Ethiopic Extended)
  2E00-2E7F：追加标点 (Supplemental Punctuation)
  2E80-2EFF：CJK 部首补充 (CJK Radicals Supplement)
  2F00-2FDF：康熙字典部首 (Kangxi Radicals)
  2FF0-2FFF：表意文字描述符 (Ideographic DescriptionCharacters)
  3000-303F：CJK 符号和标点 (CJKSymbols and Punctuation)
  3040-309F：日文平假名 (Hiragana)
  30A0-30FF：日文片假名 (Katakana)
  3100-312F：注音字母 (Bopomofo)
  3130-318F：朝鲜文兼容字母 (Hangul Compatibility Jamo)
  3190-319F：象形字注释标志 (Kanbun)
  31A0-31BF：注音字母扩展 (Bopomofo Extended)
  31C0-31EF：CJK 笔画 (CJK Strokes)
  31F0-31FF：日文片假名语音扩展 (Katakana PhoneticExtensions)
  3200-32FF：封闭式 CJK 文字和月份 (Enclosed CJK Letters andMonths)
  3300-33FF：CJK 兼容 (CJK Compatibility)
  3400-4DBF：CJK 统一表意符号扩展 A (CJK Unified Ideographs Extension A)
  4DC0-4DFF：易经六十四卦符号 (Yijing Hexagrams Symbols)
  4E00-9FBF：CJK 统一表意符号，中文字符 (CJK Unified Ideographs)
  A000-A48F：彝文音节 (Yi Syllables)
  A490-A4CF：彝文字根 (Yi Radicals)
  A500-A61F：瓦伊语（Vai）
  A660-A6FF：统一加拿大土著语音节补充 (Unified CanadianAboriginal Syllabics Supplement)
  A700-A71F：声调修饰字母 (Modifier Tone Letters)
  A720-A7FF：拉丁文扩展 - D (Latin Extended-D)
  A800-A82F：锡尔赫特文 （Syloti Nagri）
  A840-A87F：八思巴字 (Phags-pa)
  A880-A8DF：索拉什特拉（Saurashtra）
  A900-A97F：爪哇语 (Javanese)
  A980-A9DF：查克玛语（Chakma）
  AA00-AA3F：Varang Kshiti
  AA40-AA6F：Sorang Sompeng
  AA80-AADF：尼瓦尔语 （Newari）
  AB00-AB5F：越南傣语 (Vietnam Thai)
  AB80-ABA0：克耶字母 （Kayah Li）
  AC00-D7AF：朝鲜文音节 (Hangul Syllables)
  D800-DBFF：高半区 UTF-16（High-half zone of UTF-16）
  DC00-DFFF：低半区 UTF-16（Low-half zone of UTF-16）
  E000-F8FF：自行使用区域 (Private Use Zone)
  F900-FAFF：CJK 兼容象形文字 (CJK Compatibility Ideographs)
  FB00-FB4F：字母表达形式 (Alphabetic Presentation Form)
  FB50-FDFF：阿拉伯表达形式 A (Arabic PresentationForm-A)
  FE00-FE0F：变量选择符 (Variation Selector)
  FE10-FE1F：竖排形式 (Vertical Forms)
  FE20-FE2F：组合用半符号 (Combining Half Marks)
  FE30-FE4F：CJK 兼容形式 (CJKCompatibility Forms)
  FE50-FE6F：小型变体形式 (Small Form Variants)
  FE70-FEFF：阿拉伯表达形式 B (Arabic PresentationForm-B)
  FF00-FFEF：半型及全型形式 (Halfwidth and FullwidthForm)
  FFF0-FFFF：特殊 (Specials)

10300..1032F;Old Italic
10330..1034F; Gothic
10400..1044F; Deseret
1D000..1D0FF; Byzantine Musical Symbols
1D100..1D1FF; Musical Symbols
1D400..1D7FF; Mathematical Alphanumeric Symbols
20000..2A6D6; CJK Unified Ideographs Extension B
2F800..2FA1F; CJK Compatibility Ideographs Supplement
E0000..E007F; Tags
F0000..FFFFD;Private Use
100000..10FFFD; Private Use
*/

// <!--
// 英文标点符号
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
  '~': '\uFF5E', // '～'
  '!': '\uFF01', // '！'
  ';': '\uFF1B', // '；'
  ':': '\uFF1A', // '：'
  ',': '\uFF0C', // '，'
  '.': '\u3002', // '。'
  '?': '\uFF1F', // '？'
  '(': '\uFF08', // '（'
  ')': '\uFF09', // '）'
  '[': '\u3010', // '【'
  ']': '\u3011', // '】'
  '{': '\uFF5B', // '｛'
  '}': '\uFF5D', // '｝'
  '<': '\u300A', // '《'
  '>': '\u300B'  // '》'
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

  const COLON = '\uFF1A' // ：
  const SINGLE_QUOTE_OPEN = '\u2018' // ‘
  const SINGLE_QUOTE_CLOSE = '\u2019' // ’
  const DOUBLE_QUOTE_OPEN = '\u201C' // “
  const DOUBLE_QUOTE_CLOSE = '\u201D' // ”
  const MIDDLE_DOT = '\u30FB' // ・'

  let result = text

  if (options.punctuation) {
    // 替换结束性质的标点符号
    result = result.replace(fixer.punctuation, (_, cjk, punctuation) => cjk + replaceFullWidthChar(punctuation))
    // 替换中间性质的标点符号
    result = result.replace(fixer.punctuationSpecial, (_, cjkLeft, punctuation, cjkRight) => cjkLeft + fullWidthCharMap[punctuation] + cjkRight)
  }

  if (options.quote) {
    // 引号
    result = result.replace(fixer.quote, (_, cjk, quoteLeft, content) => {
      if (quoteLeft === '"') {
        return cjk + (options.doubleQuote || DOUBLE_QUOTE_OPEN) + content + (options.doubleQuoteClose || DOUBLE_QUOTE_CLOSE)
      }
      return cjk + (options.singleQuote || SINGLE_QUOTE_OPEN) + content + (options.singleQuoteClose || SINGLE_QUOTE_CLOSE)
    })
  }

  if (options.colon) {
    // 特殊冒号
    result = result.replace(fixer.colon, (_, cjk, char) => cjk + COLON + char)
  }

  if (options.conversation) {
    // 冒号后跟引号
    result = result.replace(fixer.conversation, (_, cjk, quoteLeft, content) => {
      if (quoteLeft === '"') {
        return cjk + COLON + (options.doubleQuote || DOUBLE_QUOTE_OPEN) + content + (options.doubleQuoteClose || DOUBLE_QUOTE_CLOSE)
      }
      return cjk + COLON + (options.singleQuote || SINGLE_QUOTE_OPEN) + content + (options.singleQuoteClose || SINGLE_QUOTE_CLOSE)
    })
  }

  if (options.hashTopic) {
    // 讨论主题性质的 # 符号
    result = result.replace(fixer.hashTopic, addSpace)
  }

  if (options.operator) {
    // 操作符
    result = result.replace(fixer.operator, addSpace)
    // 操作符在前
    result = result.replace(fixer.operatorAhead, addSpace)
  }

  if (options.bracket) {
    // 括号
    result = result.replace(fixer.bracket, (_, cjkLeft, bracket, cjkRight) => cjkLeft + fullWidthCharMap[bracket] + cjkRight)
  }

  if (options.middleDot) {
    // 中缀点
    result = result.replace(fixer.middleDot, (_, cjkLeft, cjkRight) => cjkLeft + MIDDLE_DOT + cjkRight)
  }

  if (options.percent) {
    // 百分号
    result = result.replace(fixer.percent, addSpace)
  }

  if (options.alphabet) {
    // 字母
    result = result.replace(fixer.alphabet, addSpace)
    result = result.replace(fixer.alphabetAhead, addSpace)
  }

  if (options.number) {
    // 数字
    result = result.replace(fixer.number, addSpace)
    result = result.replace(fixer.numberAhead, addSpace)
  }

  if (options.symbol) {
    // 英文符号
    result = result.replace(fixer.symbol, addSpace)
    result = result.replace(fixer.symbolAhead, addSpace)
  }

  return result
}

module.exports = typeset
// -->

function test(text, options) {
  console.log(typeset(text, options))
}

test(' 我是一个demo ')

test('平台0：H5')
test('年+5月', {operator: true})
