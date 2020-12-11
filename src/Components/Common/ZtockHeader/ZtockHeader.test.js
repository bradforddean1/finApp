import React from 'react';
import ReactDOM from 'react-dom';
import ZtockHeader from './ZtockHeader';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ZtockHeader Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ZtockHeader />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<ZtockHeader />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<ZtockHeader {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
