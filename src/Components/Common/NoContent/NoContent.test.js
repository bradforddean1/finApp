import React from 'react';
import ReactDOM from 'react-dom';
import NoContent from './NoContent';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NoContent Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <NoContent />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<NoContent />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<NoContent {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
