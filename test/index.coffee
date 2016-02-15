path        = require 'path'
assert      = require 'power-assert'
Chohuku = require path.join '..', 'build'

IMAGES_DIR  = path.resolve(__dirname, '..', '_images')
chohuku = new Chohuku("#{IMAGES_DIR}/cocoa1.jpg")

describe 'chohuku', ->

  it 'should returns a object when pHash()', ->
    chohuku.getPHash().then (hash) ->
      assert typeof(hash) is 'object'

  it 'should returns 8-byte length hash when pHash()', ->
    chohuku.getPHash().then (hash) ->
      assert hash.length is 8

  it 'should returns a string when pHash(true)', ->
    chohuku.getPHash(true).then (hash) ->
      assert typeof(hash) is 'string'

  it 'should returns object when mh()', ->
    chohuku.getMH().then (mh) ->
      assert typeof(mh) is 'object'

  it 'should returns 72-byte length hash when mh()', ->
    chohuku.getMH().then (mh) ->
      assert mh.length is 72
