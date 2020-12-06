import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SearchBar Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SearchBar />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<SearchBar />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<SearchBar {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
