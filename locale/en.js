module.exports = {
  ok () {
    return 'OK'
  },
  cancel () {
    return 'Cancel'
  },
  add (item = '') {
    return `Add${item ? ` '${item}'` : ''}`
  },
  selectNone () {
    return 'Select none'
  },
  clear () {
    return 'Clear'
  },
  notFound () {
    return 'Not found anything!'
  },
  search () {
    return 'Search...'
  },
  browse () {
    return 'Browse...'
  },
  nFileSelected (n = 1) {
    if (n === 1) {
      return '1 file selected!'
    }
    return `${n} files selected!`
  },
  nextPage () {
    return 'Next'
  },
  prevPage () {
    return 'Prev'
  },
  fromN (n = 1) {
    return `from ${n}`
  }
}
