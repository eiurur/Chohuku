const path = require('path')

module.exports = class Image {
  constructor(image) {
    this.image = image
  }

  get filepath() {
    return path.resolve(this.image)
  }

  get filename() {
    return path.basename(this.image)
  }

  get ext() {
    return path.extname(this.image)
  }
}
