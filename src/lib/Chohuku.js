const Jimp = require('jimp')
const Image = require('./Image')
const HASH_BASE = 16 // Hexadecimal
const RESIZE_PX = 32;

module.exports = class Chohuku {
  constructor(file) {
    this.image = new Image(file)
    return this
  }

  _read() {
    return Jimp.read(this.image.filepath)
  }

  async getHash(hashBase = HASH_BASE, px = RESIZE_PX) {
    try {
      const image = await this._read();
      const hash = await image.resize(px, px).greyscale().hash(hashBase);
      return hash;

    } catch (e) {
      throw new Error(e);
    }
  }
}
