import validate from './validate'
import invalidate from './invalidate'

const emailRegex = /^("[-a-z0-9~!$%^&*_=+}{\'?. ]+"|[-a-z0-9~!$%^&*_=+}{\'?]+)(\.([-a-z0-9~!$%^&*_=+}{\'?]+|"[ -a-z0-9~!$%^&*_=+}{\'?.]+"|“[ -a-z0-9~!$%^&*_=+}{\'?.]+”))*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]{2,63})|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]))(:\d{1,5})?$/i

export default function validateEmail(email, errorMessage) {
  if (typeof email !== 'string') {
    return invalidate(email, 'Email must be a string')
  }

  if (email.length > 254) {
    return invalidate(email, 'Email length must be less than 254 characters')
  }

  if (!emailRegex.test(email)) {
    return invalidate(email, errorMessage || 'Invalid email address')
  }

  return validate(email)
}
