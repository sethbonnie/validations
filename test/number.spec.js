import {expect} from 'chai'
import validateNumber from '../src/number'

describe('validateNumber(value)', () => {
  describe('when value is neither a number nor a string', () => {
    it('return an invalid value', () => {
      expect(validateNumber(new Date()).valid).to.equal(false)
      expect(validateNumber(undefined).valid).to.equal(false)
      expect(validateNumber(null).valid).to.equal(false)
      expect(validateNumber(true).valid).to.equal(false)
      expect(validateNumber(false).valid).to.equal(false)
      expect(validateNumber({}).valid).to.equal(false)
    })
  })

  describe('when value is a number', () => {
    it('returns a valid value when number is an integer', () => {
      expect(validateNumber(3).valid).to.equal(true)
    })

    it('returns a valid value when number is a float', () => {
      expect(validateNumber(3.0).valid).to.equal(true)
    })

    it('returns a valid value when number is negative', () => {
      expect(validateNumber(-3).valid).to.equal(true)
    })

    it('returns a valid value when number has exponent part', () => {
      expect(validateNumber(3.0e9).valid).to.equal(true)
    })
  })

  describe('when value is a string', () => {
    it('returns an invalid value when string is not a number', () => {
      expect(validateNumber('123abc').valid).to.equal(false)
    })

    it('returns an invalid value when the whole string is not a number', () => {
      expect(validateNumber('abc123').valid).to.equal(false)
    })

    it('returns a valid value when number is an integer', () => {
      expect(validateNumber('3').valid).to.equal(true)
    })

    it('returns a valid value when number is a float', () => {
      expect(validateNumber('3.0').valid).to.equal(true)
    })

    it('returns a valid value when number is negative', () => {
      expect(validateNumber('-3').valid).to.equal(true)
    })

    it('returns a valid value when number has exponent part', () => {
      expect(validateNumber('3.0e9').valid).to.equal(true)
    })
  })
})
