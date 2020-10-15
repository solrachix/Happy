import Image from '../models/Image'

const port = process.env.PORT_APP || 3333
const url = `${process.env.HOST_APP}:${port}`

export default {
  render (image: Image) {
    return {
      id: image.id,
      url: `${url}/uploads/${image.path}`
    }
  },

  renderMany (images: Image[]) {
    return images.map(image => this.render(image))
  }
}
