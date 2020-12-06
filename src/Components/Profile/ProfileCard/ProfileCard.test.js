import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './ProfileCard';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ProfileCard Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ProfileCard />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<ProfileCard />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<ProfileCard {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
