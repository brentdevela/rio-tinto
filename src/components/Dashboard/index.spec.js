import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';
import Dashboard from './index';

import { ideas } from '../../../server/data';

describe('<Dashboard>', () => {
    const render = (props) => {
        return shallow(
          <Dashboard
              {...props}
          />
        );
    };

    it('should render Dashboard', () => {
        const dashboard = render({ ideas });
        expect(dashboard).toMatchSnapshot();
    });

    it('should trigger onNewIdea', () => {
        const onNewIdea = jest.fn().mockReturnValue(Promise.resolve(true));
        const dashboard = render({ ideas, onNewIdea });
        const newIdeaButton = dashboard.find('Button').first();
        newIdeaButton.simulate('click');
        expect(onNewIdea).toBeCalled();
    });

    it('should trigger onChangeIdea', () => {
        const onChangeIdea = jest.fn().mockReturnValue(Promise.resolve(true));
        const dashboard = render({ ideas, onChangeIdea });
        const tile = dashboard.find('Tile').first();
        tile.prop('onChangeIdea')(ideas[0]);
        expect(onChangeIdea).toBeCalled();
    });

    it('should trigger onDeleteIdea', () => {
        const onDeleteIdea = jest.fn().mockReturnValue(Promise.resolve(true));
        const dashboard = render({ ideas, onDeleteIdea });
        const tile = dashboard.find('Tile').first();
        tile.prop('onDeleteIdea')(ideas[0]);
        expect(onDeleteIdea).toBeCalled();
    });
});