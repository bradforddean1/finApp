import React from 'react';
import ReactDOM from 'react-dom';
import WorldIcon from './WorldIcon';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('WorldIcon Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <WorldIcon />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<WorldIcon />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<WorldIcon {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
