import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCardLine from './ProfileCardLine';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ProfileCardLine Component', () => {
    it('Renders',
        () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ProfileCardLine />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('Renders the Default State',
    () => {
        const wrapper = shallow(<ProfileCardLine />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it.skip('Renders given props',
    () => {
        const wrapper = shallow(<ProfileCardLine {...props}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
