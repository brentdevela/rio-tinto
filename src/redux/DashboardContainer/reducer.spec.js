import { cloneDeep } from 'lodash';
import reducer from './reducer';
import types from './types';
import { ideas } from '../../../server/data';

describe('DashboardContainer reducer', () => {
    it('should return default state', () => {
        const state = { ideas: [] };
        expect(reducer(state, { type: ''})).toBe(state);
    });

    it('should SET_IDEAS', () => {
        const state = { ideas: [] };
        const newState = reducer(state, { type: types.SET_IDEAS, ideas: cloneDeep(ideas) });
        expect(newState.ideas.length).toBe(11);
    });

    it('should SET_IDEA', () => {
        const state = { ideas: cloneDeep(ideas) };
        const updatedIdea = { id: "1", title: 'New Title', body: 'New Body'};
        const newState = reducer(state, { type: types.SET_IDEA, idea: updatedIdea });
        expect(newState.ideas[0].title).toBe(updatedIdea.title);
        expect(newState.ideas[0].body).toBe(updatedIdea.body);
        expect(newState.ideas.length).toBe(11);
    });

    it('should CREATE_IDEA', () => {
        const state = { ideas: cloneDeep(ideas) };
        const newIdea = { id: "1", title: 'New Title', body: 'New Body'};
        const newState = reducer(state, { type: types.CREATE_IDEA, idea: newIdea });
        expect(newState.ideas.length).toBe(12);
    });

    it('should DELETE_IDEA', () => {
        const state = cloneDeep({ ideas });
        const oldIdea = { id: "1" };
        const newState = reducer(state, { type: types.DELETE_IDEA, idea: oldIdea });
        expect(newState.ideas.length).toBe(10);
    });
});