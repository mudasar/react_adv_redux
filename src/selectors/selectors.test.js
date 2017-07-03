import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import { authorFormattedForDropdown } from './selectors';


describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('shoult return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName:'House'},
                {id: 'mudasar-rauf', firstName: 'Mudasar', lastName:'Rauf'}
            ];

            const expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'mudasar-rauf', text: 'Mudasar Rauf'}
            ];
            expect(authorFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});