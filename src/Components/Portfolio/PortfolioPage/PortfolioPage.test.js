import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPage from './PortfolioPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('PortfolioPage Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <PortfolioPage />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<PortfolioPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<PortfolioPage {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
