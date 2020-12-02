const htmlEntities = {
  nbsp: ' ',
  cent: '¢',
  pound: '£',
  yen: '¥',
  euro: '€',
  copy: '©',
  reg: '®',
  lt: '<',
  gt: '>',
  laquo: '«',
  raquo: '»',
  quot: '"',
  amp: '&',
  apos: "'",
  divide: '÷',
  lowast: '∗',
  minus: '−',
  infin: '∞',
  asymp: '≈',
  ne: '≠',
  equiv: '≡',
  le: '≤',
  ge: '≥',
  circ: 'ˆ',
  OElig: 'Œ',
  oelig: 'œ',
  tilde: '˜',
  ndash: '–',
  mdash: '—',
  lsquo: '‘',
  rsquo: '’',
  sbquo: '‚',
  ldquo: '“',
  rdquo: '”',
  bdquo: '„',
  dagger: '†',
  bull: '•',
  hellip: '…',
  permil: '‰',
  prime: '′',
  Prime: '″',
  lsaquo: '‹',
  rsaquo: '›',
  trade: '™',
  larr: '←',
  uarr: '↑',
  rarr: '→',
  darr: '↓',
};

function unescapeHTML(str) {
  return str.replace(/&([^;]+);/g, (entity, entityCode) => {
    let match;

    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
      /* eslint no-cond-assign: 0 */
    }
    if ((match = entityCode.match(/^#x([\da-fA-F]+)$/))) {
      return String.fromCharCode(parseInt(match[1], 16));
      /* eslint no-cond-assign: 0 */
    }
    if ((match = entityCode.match(/^#(\d+)$/))) {
      // eslint-disable-next-line no-bitwise
      return String.fromCharCode(~~match[1]);
    }
    return entity;
  });
}

export default unescapeHTML;
