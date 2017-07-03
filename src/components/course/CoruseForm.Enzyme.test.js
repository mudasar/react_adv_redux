import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
//import {} from 'react-test-renderer/shallow';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(loading) {
    let props = {
        course: {}, loading, errors:{},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<CourseForm {...props} />);
}

describe('testing with enzyme', () => {
    it('renders form and h1', () => {
        const wrapper  = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

      it('save button is labeled "save" when not saving', () => {
        const wrapper  = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when not saving', () => {
        const wrapper  = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});