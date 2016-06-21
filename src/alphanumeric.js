import validate from './validate'
import invalidate from './invalidate'

const alphaNumericRegex = /^[a-z0-9]+$/i

export default function validateAlphaNumeric(value) {
  if (typeof value === 'string' && alphaNumericRegex.test(value)) {
    return validate(value)
  }

  return invalidate(value)
}
