import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './PortfolioItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PortfolioItem Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <PortfolioItem />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<PortfolioItem />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<PortfolioItem {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
