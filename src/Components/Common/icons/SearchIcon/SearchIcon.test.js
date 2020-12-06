import React from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './SearchIcon';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SearchIcon Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SearchIcon />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<SearchIcon />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<SearchIcon {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
