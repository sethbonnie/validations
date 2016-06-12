import {expect} from 'chai'
import {validate,invalidate} from '../src/index'

describe('main module', () => {
  it('exposes a validate() function', () => {
    expect(validate).to.be.a('function')
  })

  it('exposes a invalidate() function', () => {
    expect(invalidate).to.be.a('function')
  })
})

