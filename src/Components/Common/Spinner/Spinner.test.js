import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Spinner Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Spinner />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<Spinner />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<Spinner {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
