import React from 'react';
import ReactDOM from 'react-dom';
import PageError from './PageError';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PageError Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <PageError />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<PageError />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<PageError {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
