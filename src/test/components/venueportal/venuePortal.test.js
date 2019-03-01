import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'
import VenuePortal from '../../../components/venuePortal.js'


describe('Venue Portal', () => {
  let wrapper;
  let mockVenue;
  beforeEach(() => {
    wrapper = mount(<VenuePortal/>)
    mockVenue = {
     name: 'test',
     address: '22 testytwo street',
     email: 'test@test.com',
     password: 'password',

   }  })

   describe('#Render', () => {

     it('renders a home, signup & signin button', () => {
       expect(wrapper.find('Home')).toBeTruthy()
       expect(wrapper.find('Sign Up')).toBeTruthy()
       expect(wrapper.find('Sign In')).toBeTruthy()

     })
   })
describe('#State changing functions', () => {
  it('#_onSignupClick changes the state of signin & signup', () => {
    wrapper.find('button').first().simulate('click')
    expect(wrapper.state('signin')).toBe(false)
    expect(wrapper.state('signup')).toBe(true)
    })

  it('#_onSignInClick changes the state of signin & signup', () => {
    wrapper.find('button').at(1).simulate('click')
    expect(wrapper.state('signin')).toBe(true)
    expect(wrapper.state('signup')).toBe(false)
  })

  it('#_onLogoutClick changes the state of signin, signup, loggedIn & venue', () => {
    let comp = wrapper.instance()
    comp._onLogoutClick()
    expect(comp.state.signin).toBe(false)
    expect(comp.state.signup).toBe(false)
    expect(comp.state.loggedIn).toBe(false)
    expect(comp.state.venue).toBe(null)
  })

  it('#handler changes the state of logged in & venue', () => {
    let comp = wrapper.instance()
    comp.handler(mockVenue)
    expect(comp.state.loggedIn).toBe(true)
    expect(comp.state.venue).toBe(mockVenue)
  })

  })
})
