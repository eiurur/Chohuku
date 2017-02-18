const test = require('ava')
const path = require('path')
const compare = require('hamming-distance')

const Chohuku = require('../build/index')
const THRESHOLD = 10

test('should return hash when pass a correct image path', async t => {
  const image = path.resolve('_images/cocoa1.jpg')
  const expected = 'string'
  const actual = await new Chohuku(image).getHash()
  t.is(expected, typeof actual)
})

test('should return similar when compare same images', async t => {
  const imageA = path.resolve('_images/cocoa1.jpg')
  const imageB = path.resolve('_images/cocoa1.jpg')
  const hashA = await new Chohuku(imageA).getHash()
  const hashB = await new Chohuku(imageB).getHash()
  const expected = true
  const actual = compare(hashA, hashB) < THRESHOLD
  t.is(expected, actual)
})

test('should return similar when compare different size images', async t => {
  const imageA = path.resolve('_images/cocoa1.jpg')
  const imageB = path.resolve('_images/cocoa1_s.jpg')
  const hashA = await new Chohuku(imageA).getHash()
  const hashB = await new Chohuku(imageB).getHash()
  const expected = true
  const actual = compare(hashA, hashB) < THRESHOLD
  t.is(expected, actual)
})

test('should return similar when compare over text images', async t => {
  const imageA = path.resolve('_images/cocoa1.jpg')
  const imageB = path.resolve('_images/cocoa1_t.jpg')
  const hashA = await new Chohuku(imageA).getHash()
  const hashB = await new Chohuku(imageB).getHash()
  const expected = true
  const actual = compare(hashA, hashB) < THRESHOLD
  t.is(expected, actual)
})

test('should return non similar when compare flip vertical images', async t => {
  const imageA = path.resolve('_images/cocoa1.jpg')
  const imageB = path.resolve('_images/cocoa1_r.jpg')
  const hashA = await new Chohuku(imageA).getHash()
  const hashB = await new Chohuku(imageB).getHash()
  const expected = false
  const actual = compare(hashA, hashB) < THRESHOLD
  t.is(expected, actual)
})

test('should return non similar when compare slightly different images', async t => {
  const imageA = path.resolve('_images/cocoa1.jpg')
  const imageB = path.resolve('_images/cocoa2.jpg')
  const hashA = await new Chohuku(imageA).getHash()
  const hashB = await new Chohuku(imageB).getHash()
  const expected = false
  const actual = compare(hashA, hashB) < THRESHOLD
  t.is(expected, actual)
})

test('should return non similar when compare absolutely different images', async t => {
  const imageA = path.resolve('_images/cocoa1.jpg')
  const imageB = path.resolve('_images/cocoa4.jpg')
  const hashA = await new Chohuku(imageA).getHash()
  const hashB = await new Chohuku(imageB).getHash()
  const expected = false
  const actual = compare(hashA, hashB) < THRESHOLD
  t.is(expected, actual)
})
