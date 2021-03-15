/**
 * @param {boolean} logTitle if true,it will try find a style tag which `title` is `log`. default: false
 * @returns {Function}
 * @author wk989898
 * @license MIT
 */
function Logstyle(logTitle = false) {
  /**
   * @param {string} text 
   * @returns {number} 
   */
  function getLen(text) {
    var words = text.split('%c').slice(1)
    return words.length
  }

  /**
  * @param {string} text 
  * @param {Array<string>} css
  */
  return function (text, ...css) {
    if (css.length == 1)
      css = css[0].split(' ')
    var textLen = getLen(text)
    var cssLen = css.length
    var style = css
    if (cssLen > textLen) {
      var isConvert = new Array(cssLen - textLen).fill(false)
      let i = cssLen - textLen
      while (i < cssLen) {
        if (/^%css/.test(css[i])) {
          style[i] = css[i].replace(/^%css/, '')
          isConvert[i - textLen] = true
        }
        i++
      }
    }
    var styleSheets = document.styleSheets
    Object.values(styleSheets).forEach(s => {
      if (logTitle && s.title == 'log'
        || !logTitle)
        Object.values(s.cssRules).forEach(t => {
          var index = css.indexOf(t.selectorText)
          if (index != -1 && (index < textLen || isConvert[index - textLen])) {
            style[index] = t.cssText.replace(/^.*\{(.*)\}/, '$1')
          }
        })
    })
    return console.log(text, ...style)
  }
};


