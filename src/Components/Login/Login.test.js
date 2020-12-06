import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Login Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Login />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<Login />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<Login {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
