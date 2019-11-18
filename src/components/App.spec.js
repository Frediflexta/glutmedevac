import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App test', () => {
  let wrapper = shallow(<App/>);

  beforeEach(() => {
    wrapper = shallow(<App/>);
  })

  it('should exist', () => {

    expect(wrapper.text().includes('Glutmed-evac')).toBe(true);
  })
})
