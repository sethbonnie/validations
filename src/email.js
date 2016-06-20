import validateType from './type'
import validatePresence from './presence'
import validate from './validate'
import invalidate from './invalidate'

const emailRegex = /^("[-a-z0-9~!$%^&*_=+}{\'?. ]+"|[-a-z0-9~!$%^&*_=+}{\'?]+)(\.([-a-z0-9~!$%^&*_=+}{\'?]+|"[ -a-z0-9~!$%^&*_=+}{\'?.]+"|“[ -a-z0-9~!$%^&*_=+}{\'?.]+”))*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]))(:\d{1,5})?$/i

export default function validateEmail(email, errorMessage) {
  if (typeof email !== 'string') {
    return invalidate(email, 'Email must be a string')
  }

  if (!emailRegex.test(email)) {
    return invalidate(email, errorMessage || 'Invalid email address')
  }

  return validate(email)
}
