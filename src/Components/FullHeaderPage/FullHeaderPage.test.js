import React from 'react';
import ReactDOM from 'react-dom';
import FullHeaderPage from './FullHeaderPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('FullHeaderPage Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <FullHeaderPage />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<FullHeaderPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<FullHeaderPage {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
