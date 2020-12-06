import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Chart Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Chart />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<Chart />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<Chart {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
