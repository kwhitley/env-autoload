import dotenv from 'dotenv'

const Reset = '\x1b[0m'
const Bright = '\x1b[1m'
const Dim = '\x1b[2m'
const Underscore = '\x1b[4m'
const Reverse = '\x1b[7m'

const FgBlack = '\x1b[30m'
const FgRed = '\x1b[31m'
const FgGreen = '\x1b[32m'
const FgYellow = '\x1b[33m'
const FgBlue = '\x1b[34m'
const FgMagenta = '\x1b[35m'
const FgCyan = '\x1b[36m'
const FgWhite = '\x1b[37m'

if (process.env.NODE_ENV !== 'production') {
  try {
    const result = dotenv.config({ silent: false })

    if (result.error) {
      throw ReferenceError('no .env file found at project root')
    }
  } catch (err) {
    console.log(`${Bright}${FgYellow}[env-loader] ${Reset}${FgYellow}${err}${Reset}`)
  }
}

export default process.env
