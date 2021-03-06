import React from 'react'
import { TextInput } from 'react-native'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { Input } from '../src'

describe('<Input /> & <Textarea>', () => {
  it('onKeyDown', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<Input onKeyDown={spy} />)
    wrapper.find(TextInput).props().onKeyPress({ nativeEvent: { key: 'Enter' } })
    expect(spy.calledOnce).toBe(true)
    expect(spy.args[0][0]).toMatchObject({
      which: 13,
      target: expect.objectContaining({
        value: expect.any(String)
      })
    })
  })
})
