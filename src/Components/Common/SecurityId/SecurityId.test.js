import React from 'react';
import ReactDOM from 'react-dom';
import SecurityId from './SecurityId';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SecurityId Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SecurityId />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<SecurityId />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<SecurityId {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
