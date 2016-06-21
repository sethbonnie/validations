import {expect} from 'chai'
import validateAlphaNumeric from '../src/alphanumeric'

describe('validateAlphaNumeric(value)', () => {
  describe('when not a string', () => {
    it('returns an invalid value', () => {
      const notStrings = [
        null,
        undefined,
        42,
        true,
        false,
        {},
        []
      ]
      const allInvalid = notStrings.every((value) => {
        return validateAlphaNumeric(value).invalid
      })

      expect(allInvalid).to.equal(true)
    })
  })

  describe('when value is a blank string', () => {
    it('returns an invalid value', () => {
      const case1 = ''
      const case2 = '  '
      const case3 = '\n\n'
      const case4 = '\t\t'
      const case5 = '\r\n'

      expect(validateAlphaNumeric(case1).valid).to.equal(false)
      expect(validateAlphaNumeric(case2).valid).to.equal(false)
      expect(validateAlphaNumeric(case3).valid).to.equal(false)
      expect(validateAlphaNumeric(case4).valid).to.equal(false)
      expect(validateAlphaNumeric(case5).valid).to.equal(false)
    })
  })

  describe('when value contains non alphanumeric characters', () => {
    it('returns an invalid value', () => {
      const case1 = 'ABCDEFGHIJKLM;;%NOPQRSTUVWXYZ'
      const case2 = ',.[]'
      const case3 = '  abc'
      const case4 = 'abc\n\t'

      expect(validateAlphaNumeric(case1).valid).to.equal(false)
      expect(validateAlphaNumeric(case2).valid).to.equal(false)
      expect(validateAlphaNumeric(case3).valid).to.equal(false)
      expect(validateAlphaNumeric(case4).valid).to.equal(false)
    })
  })

  describe('when value contains strictly alphanumeric characters', () => {
    it('returns a valid value',() => {
      const case1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123'
      const case2 = '123abcdefghijklmNOPQRSTUVWXYZ'
      const case3 = 'abcdefghijklmnopqrstuvwxyz'
      const case4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const case5 = '1234567890'
      
      expect(validateAlphaNumeric(case1).valid).to.equal(true)
      expect(validateAlphaNumeric(case2).valid).to.equal(true)
      expect(validateAlphaNumeric(case3).valid).to.equal(true)
      expect(validateAlphaNumeric(case4).valid).to.equal(true)
      expect(validateAlphaNumeric(case5).valid).to.equal(true)
    })
  })

})
