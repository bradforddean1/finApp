import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './SplashPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SplashPage Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SplashPage />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<SplashPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<SplashPage {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
