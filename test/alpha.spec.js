import {expect} from 'chai'
import validateAlpha from '../src/alpha'

describe('validateAlpha(value)', () => {
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
        return validateAlpha(value).invalid
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

      expect(validateAlpha(case1).valid).to.equal(false)
      expect(validateAlpha(case2).valid).to.equal(false)
      expect(validateAlpha(case3).valid).to.equal(false)
      expect(validateAlpha(case4).valid).to.equal(false)
      expect(validateAlpha(case5).valid).to.equal(false)
    })
  })

  describe('when value contains non alpha characters', () => {
    it('returns an invalid value', () => {
      const case1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123'
      const case2 = '123ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const case3 = 'ABCDEFGHIJKLM;;%NOPQRSTUVWXYZ'
      const case4 = ',.[]'
      const case5 = '  abc'
      const case6 = 'abc\n\t'

      expect(validateAlpha(case1).valid).to.equal(false)
      expect(validateAlpha(case2).valid).to.equal(false)
      expect(validateAlpha(case3).valid).to.equal(false)
      expect(validateAlpha(case4).valid).to.equal(false)
      expect(validateAlpha(case5).valid).to.equal(false)
      expect(validateAlpha(case6).valid).to.equal(false)
    })
  })

  describe('when value contains strictly alpha characters', () => {
    it('returns a valid value',() => {
      const lowercase = 'abcdefghijklmnopqrstuvwxyz'
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      
      expect(validateAlpha(lowercase).valid).to.equal(true)
      expect(validateAlpha(uppercase).valid).to.equal(true)
    })
  })
})
