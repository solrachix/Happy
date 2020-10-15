import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads')

export default {
  directory: uploadFolder,

  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: (request, file, cb) => {
      const Hash = crypto.randomBytes(16).toString('hex')
      const name = file.originalname.replaceAll(' ', '-')

      const filename = `${Hash}-${name}`

      return cb(null, filename)
    }
  })
}
