import {expect} from 'chai'
import validateEmail from '../src/email'

// From https://en.wikipedia.org/wiki/Email_address#Valid_email_addresses
export const validEmailAddresses = [
  'email@example.com',
  'firstname.lastname@example.com',
  'email@subdomain.example.com',
  'firstname+lastname@example.com',
  'email@123.123.123.123',
  'email@[123.123.123.123]',
  '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
  'much."more\ unusual"@example.com',
  'very.unusual."@".unusual.com@example.com',
  'very.“(),:;<>[]”.VERY.“very@\\ "very”.unusual@strange.example.com',
]

export const invalidEmailAddresses = [
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@exmaple.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'あいうえお@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@-example.com',
  'email@example.web',
  'email@111.2222.3333.44444',
  'email@example..com',
  'Abc..123@example.com',
  '“(),:;<>[\]@example.com',
  'just"not"right@example.com',
  'this\ is"really"not\allowed@example.com',
]


describe('validateEmail(email)', () => {
  describe('when blank', () => {
    it('returns an invalid value', () => {
      const blankEmail = ''
      expect(validateEmail(blankEmail).valid).to.equal(false)
    })
  })

  describe('when undefined', () => {
    it('returns an invalid value', () => {
      const undefinedEmail = undefined
      expect(validateEmail(undefinedEmail).valid).to.equal(false)
    })
  })

  describe('when not a string', () => {
    it('returns an invalid value', () => {
      const nonStrings = [
        1234,
        /email@example.com/,
        true,
        false,
        null,
        {email: 'email@example.com'},
      ]
      const allInvalid = nonStrings.every((val) => {
        return validateEmail(val).invalid
      })
      expect(allInvalid).to.equal(true)
    })
  })

  describe('invalid email addresses', () => {
    it('returns an invalid value', () => {
      const allInvalid = invalidEmailAddresses.every((email) => {
        return validateEmail(email).invalid
      })
      const anyValid = invalidEmailAddresses.some((email) => {
        return validateEmail(email).valid
      })

      expect(allInvalid).to.equal(true)
      expect(anyValid).to.equal(false)
    })
  })

  describe('when given a valid email address', () => {
    it('returns a valid value', () => {
      const allValid = validEmailAddresses.every((email) => {
        return validateEmail(email).valid
      })
      const anyInvalid = validEmailAddresses.some((email) => {
        return validateEmail(email).invalid
      })

      expect(allValid).to.equal(true)
      expect(anyInvalid).to.equal(false)
    })
  })
})
