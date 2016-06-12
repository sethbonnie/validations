import {expect} from 'chai'
import invalidate from '../src/invalidate'
import validate from '../src/validate'

describe('invalidate(value, message)', () => {
  const originalValue = 88
  const message = 'this is so wrong'
  let result

  before(() => {
    result = invalidate(originalValue, message)
  })

  it('returns the original value under the `value` property', () => {
    expect(result.value).to.equal(originalValue)
  })

  it('returns an object with a `valid` property set to false', () => {
    expect(result.valid).to.equal(false)
  })

  it('returns an object with an `invalid` property set to true', () => {
    expect(result.invalid).to.equal(true)
  })

  it('returns an object with a non-empty `errors` array property', () => {
    expect(result.errors).to.be.an('array')
    expect(result.errors).not.to.have.length(0)
  })

  it('has the given message as the last element in the `errors` array', () => {
    const last = result.errors[result.errors.length-1]
    expect(result.errors[0]).to.equal(message)
  })

  describe('when given a valid value', () => {
    it('converts it to an invalid value', () => {
      const valid = validate(5)
      const result = invalidate(valid, 'this is no longer valid')
      expect(result.invalid).to.equal(true)
    })
  })  
})
