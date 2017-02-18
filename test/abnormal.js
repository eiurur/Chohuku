const test = require('ava')
const {Chohuku} = require('../build/index')

test('should return Error when pass an invalid image path', async t => {
  try {
    const image = '_images/not-exist.jpg'
    const hash = await new Chohuku(image).getHash()
  } catch (e) {
    return
  }
  t.fail()
})
