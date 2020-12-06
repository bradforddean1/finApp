import React from 'react';
import ReactDOM from 'react-dom';
import Intermodal from './Intermodal';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Intermodal Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Intermodal />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<Intermodal />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<Intermodal {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
