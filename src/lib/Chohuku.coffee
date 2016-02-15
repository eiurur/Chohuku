chalk                = require 'chalk'
fs                   = require 'fs'
compare              = require 'hamming-distance'
path                 = require 'path'
phash                = require 'phash-image'
GraphicsMagickClient = require path.resolve __dirname, 'GraphicsMagickClient'

graphicsMagickClient = new GraphicsMagickClient()

RESIZE_PX      = 16
IMAGES_DIR     = path.resolve(__dirname, '..', '..', '_images')
RESIZE_DIR     = "#{IMAGES_DIR}/resize"
GRAY_SCALE_DIR = "#{IMAGES_DIR}/grayscale"


module.exports = class Chohuku

  constructor: (@imagePath) ->
    @imageFilename = @imagePath.split('/').pop()
    @generateDir()

  generateDir: ->
    fs.existsSync(RESIZE_DIR) or fs.mkdirSync(RESIZE_DIR)
    fs.existsSync(GRAY_SCALE_DIR) or fs.mkdirSync(GRAY_SCALE_DIR)

  resize: ->
    resizeParams =
      source: @imagePath
      output: "#{RESIZE_DIR}/#{@imageFilename}"
      width: RESIZE_PX
      height: RESIZE_PX
    return graphicsMagickClient.resize resizeParams

  grayscalize: ->
    typeParams =
      source: "#{RESIZE_DIR}/#{@imageFilename}"
      output: "#{GRAY_SCALE_DIR}/#{@imageFilename}"
      type: 'Grayscale'
    return graphicsMagickClient.type typeParams

  mh: ->
    return phash.mh("#{GRAY_SCALE_DIR}/#{@imageFilename}")

  pHash: (ulong64Flag = false) ->
    return phash("#{GRAY_SCALE_DIR}/#{@imageFilename}", ulong64Flag)

  getPHash: (ulong64Flag) ->
    @resize()
    .then (resizeResult) => @grayscalize()
    .then (grayScaleResult) => @pHash(ulong64Flag)
    .catch (err) -> console.error chalk.red err

  getMH: ->
    @resize()
    .then (resizeResult) => @grayscalize()
    .then (grayScaleResult) => @mh()
    .catch (err) -> console.error chalk.red err

  # TODO
  # Hamming distance

  # TODO
  # keephoold hash value