import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {ProgressPageRow} from './ProgressPageRow';

function setup(status) {
    const props = {
      item: {name: "Test", price: 0, stat: status}
    };

    return shallow(<ProgressPageRow {...props} />);
}

describe('ProgressPage via Enzyme', () => {
  it('renders divs and h2s', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('h2').length).toBe(2);
  });

  it('has a correctly styled button when on first stage (i.e. "cancel" class)', () => {
    const wrapper = setup(0);
    expect(wrapper.find('#testBegin').prop('className')).toEqual("cancel");
  });

  it('has a correctly styled button when on last stage (i.e. "pickup" class)', () => {
    const wrapper = setup(3);
    expect(wrapper.find('#testDone').prop('className')).toEqual("pickup");
  });

});
