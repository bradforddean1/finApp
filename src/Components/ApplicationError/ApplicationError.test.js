import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationError from './ApplicationError';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ApplicationError Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ApplicationError />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<ApplicationError />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<ApplicationError {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
