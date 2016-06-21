import validate from './validate'
import invalidate from './invalidate'

const numberRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/

export default function validateNumber(value) {
  if (typeof value === 'number' ||
      (typeof value === 'string' && numberRegex.test(value))) {
    return validate(value)
  }

  return invalidate(value)
}
