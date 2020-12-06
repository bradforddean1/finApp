import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioList from './PortfolioList';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PortfolioList Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <PortfolioList />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<PortfolioList />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<PortfolioList {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
