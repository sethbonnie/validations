import {expect} from 'chai'
import validatePresence from '../src/presence'

describe('validatePresence(value)', () => {
  describe('when value is null', () => {
    it('returns an invalid value', () => {
      expect(validatePresence(null).invalid).to.equal(true)
    })
  })

  describe('when value is undefined', () => {
    it('returns an invalid value', () => {
      expect(validatePresence(undefined).invalid).to.equal(true)
    })
  })
  
  describe('when value is NaN', () => {
    it('returns an invalid value', () => {
      expect(validatePresence(NaN).invalid).to.equal(true)
    })
  })

  describe('when value is a number', () => {
    it('returns an a valid value for any number including zero', () => {
      expect(validatePresence(0).valid).to.equal(true)
      expect(validatePresence(-10).valid).to.equal(true)
      expect(validatePresence(10).valid).to.equal(true)
    })
  })

  describe('when value is a string', () => {
    it('returns an invalid value when the string is empty', () => {
      expect(validatePresence('').invalid).to.equal(true)
    })

    it('returns an invalid value when the string is blank', () => {
      const spaces = '    '
      const newlines = "\n\n\n "
      const tabs = "\t\t  "
      const carriageReturns = "\r\n\r\n  "

      expect(validatePresence(spaces).invalid).to.equal(true)
      expect(validatePresence(newlines).invalid).to.equal(true)
      expect(validatePresence(tabs).invalid).to.equal(true)
      expect(validatePresence(carriageReturns).invalid).to.equal(true)
    })
    
    it('returns an valid value when the string contains one non-space character', () => {
      const value = 'word'
      const withinSpaces = '   s   '
      const withinNewlines = "\n\nHello\n"
      const withinTabs = "\t\tHello\t\t"
      const withinCarriageReturns = "\r\nHello\r\n"

      expect(validatePresence(value).valid).to.equal(true)
      expect(validatePresence(withinSpaces).valid).to.equal(true)
      expect(validatePresence(withinNewlines).valid).to.equal(true)
      expect(validatePresence(withinTabs).valid).to.equal(true)
      expect(validatePresence(withinCarriageReturns).valid).to.equal(true)
    })
  })

  describe('when value is a boolean', () => {
    it('returns an invalid value when false', () => {
      expect(validatePresence(false).invalid).to.equal(true)
    })

    it('returns a valid value when true', () => {
      expect(validatePresence(true).valid).to.equal(true)
    })
  })

  describe('when value is an Array', () => {
    it('returns an invalid value when an empty array', () => {
      expect(validatePresence([]).invalid).to.equal(true)
    })
    
    it('returns an valid value when array has length > 0', () => {
      expect(validatePresence([1]).valid).to.equal(true)
    })
  })

  describe('when value is an object', () => {
    it('returns an invalid value when object is empty (no keys)', () => {
      const obj = {}
      expect(validatePresence(obj).invalid).to.equal(true)
    })

    it('returns a valid value when object has at least one key', () => {
      const obj = {'hello': undefined}
      expect(validatePresence(obj).valid).to.equal(true)
    })
  })
})
