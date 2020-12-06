import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('LoginPage Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <LoginPage />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<LoginPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<LoginPage {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
