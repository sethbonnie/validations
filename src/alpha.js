import validate from './validate'
import invalidate from './invalidate'

const alphaRegex = /^[a-z]+$/i

export default function validateAlpha(value) {
  if (typeof value === 'string' && alphaRegex.test(value)) {
    return validate(value)
  }

  return invalidate(value)
}
