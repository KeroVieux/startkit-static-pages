require('../../src/css/screen.scss')
require('../../src/css/sass/font-awesome/scss/font-awesome.scss')

import h1 from '../templates/h1.hbs'
document.write('<h1>Hello World111</h1>')
const html = h1({ title: 'hhhhh' })
$(() => {
  $('.a').empty().append(html)
})
const a = _.chunk([1, 2, 3], 2)
console.log(a)
console.log(Moment())
