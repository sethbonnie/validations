import {expect} from 'chai'
import validate from '../src/validate'
import invalidate from '../src/invalidate'

describe('validate(value)', () => {
  it('returns the original value under the `value` property', () => {
    const value = "original"
    const result = validate(value)
    expect(result.value).to.equal(value)
  })

  it('returns an object with a `valid` property set to true', () => {
    const value = validate(5)
    expect(value.valid).to.equal(true)
  })

  it('returns an object with an `invalid` property set to false', () => {
    const value = validate(5)
    expect(value.invalid).to.equal(false)
  })

  it('returns an object with an undefined `errors` property', () => {
    const value = validate(5)
    expect(value.errors).to.equal(undefined)
  })

  describe('when given an invalid value', () => {
    it('returns a valid value', () => {
      const invalid = invalidate(4, '4 is not 5')
      const value = validate(invalid)

      expect(value.valid).to.equal(true)
      expect(value.invalid).to.equal(false)
      expect(value.errors).to.equal(undefined)
    })
  })
})
