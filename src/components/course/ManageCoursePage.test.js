import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {ManageCoursePage} from './ManageCoursePage';

function setup() {
    let props = {
        course: {
            id: '',
            title: '',
            watchHref: '',
            authorid: '',
            length: '',
            category: ''
        },
        authors: [],
        actions: {
            saveCourse: () => {return Promise.resolve();}
        }
    };

    return mount(<ManageCoursePage {...props}/>);
}

describe('testing Manage Course Page with enzyme the exported version', () => {

    it('sets error message when trying to save empty title', () => {
        const wrapper = setup();
        const saveButton = wrapper
            .find('input')
            .last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });

    it('renders form and h1', () => {
        // const wrapper  = setup(false); expect(wrapper.find('form').length).toBe(1);
        // expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

});
