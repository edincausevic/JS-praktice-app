

export const _GL = {
  UTIL: {
    formatNum: (num) => {
      let number = num + 1
      return number.length === 1 ? number : '0' + number
    },
    formatCodeMarkup: (text) => {
      return text.split('%').map((part, index) => {
        return index % 2 === 1 ? `<code>${part}</code>` : part;
      }).join('');
    }
  }
}