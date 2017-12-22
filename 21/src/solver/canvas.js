const initialImage = [[0, 1, 0], [0, 0, 1], [1, 1, 1]]

class Image {
  constructor () {
    this.canvas = initialImage
  }
}

module.exports = {
  initialImage,
  Image
}
