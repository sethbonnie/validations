import validate from './validate'
import invalidate from './invalidate'

export default function validatePresence(value) {
  if (value === null) {
    return invalidate(value)
  }

  if (value === undefined) {
    return invalidate(value)
  }

  // NaN is the only value that is not equal to itself (stupid, but it works...)
  if (isNaN(value) && value !== value) {
    return invalidate(value)
  }

  if (typeof value === 'boolean') {
    return value ? validate(value) : invalidate(value)
  }
  
  if (typeof value === 'number') {
    return validate(value)
  }

  if (typeof value === 'string') {
    return value.replace(/\s+/g, '').length > 0 ? validate(value) : invalidate(value)
  }

  if (value instanceof Array) {
    return value.length > 0 ? validate(value) : invalidate(value)
  }
  
  return Object.keys(value).length > 0 ? validate(value) : invalidate(value)
}
