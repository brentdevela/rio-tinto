import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import Tile from './index';
import { ideas } from "../../../server/data";

describe('<Tile>', () => {
    const render = (props) => {
        return shallow(
            <Tile
                {...props}
            />
        );
    };

    it('should render Tile', () => {
        const tile = render({ idea:ideas[0] });
        expect(tile).toMatchSnapshot();
    });

    it('should trigger onClickDelete', () => {
        const onDeleteIdea = jest.fn();
        const tile = render({
            idea:ideas[0],
            onDeleteIdea
        });
        const closeButton = tile.find('.close').first();
        closeButton.simulate('click');
        expect(onDeleteIdea).toBeCalled();
    });

    it('should not trigger any prop funcs ', () => {
        const onChangeIdea = jest.fn();
        const tile = render({
            idea:ideas[0],
            onChangeIdea
        });
        const titleField = tile.find('FormControl').first();
        titleField.simulate('change', { target: { id: 'title', value: 'New Title'} });
        expect(onChangeIdea).not.toBeCalled();
    });

    it('should trigger onInputBlur  ', () => {
        const onChangeIdea = jest.fn();
        const tile = render({
            idea:ideas[0],
            onChangeIdea
        });
        const titleField = tile.find('FormControl').first();
        titleField.simulate('change', { target: { id: 'title', value: 'New Title'} });
        titleField.simulate('blur');
        expect(onChangeIdea).toBeCalled();
    });
});