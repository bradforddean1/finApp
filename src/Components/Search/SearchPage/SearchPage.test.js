import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SearchPage Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <SearchPage />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<SearchPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<SearchPage {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
