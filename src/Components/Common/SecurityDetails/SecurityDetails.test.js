import React from 'react';
import ReactDOM from 'react-dom';
import SecurityDetails from './SecurityDetails';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SecurityDetails Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SecurityDetails />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<SecurityDetails />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<SecurityDetails {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
