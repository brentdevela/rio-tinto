import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import operations from './operations';
import types from './types';
import { ideas } from '../../../server/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('DashboardContainer operations', () => {
    it('should getIdeas', () => {
        const initialState = { ideas: [] };
        const store = mockStore(initialState);

        fetch.once(JSON.stringify(ideas), { status: 200 });

        return store.dispatch(operations.getIdeas())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].ideas.length).toEqual(11);
                expect(actions[0].type).toEqual(types.SET_IDEAS);
            });
    });

    it('should postIdeas', () => {
        const initialState = { ideas: [] };
        const store = mockStore(initialState);
        const newIdea = { id: '12', title: '', body: '' };
        fetch.once(JSON.stringify(newIdea), { status: 200 });

        return store.dispatch(operations.postIdea())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].idea).toEqual(newIdea);
                expect(actions[0].type).toEqual(types.CREATE_IDEA);
            });
    });

    it('should putIdea', () => {
        const initialState = { ideas: [] };
        const store = mockStore(initialState);
        const existingIdea = { id: '2', title: 'ABC', body: 'XYZ' };
        fetch.once(JSON.stringify(existingIdea), { status: 200 });

        return store.dispatch(operations.putIdea(existingIdea))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].idea).toEqual(existingIdea);
                expect(actions[0].type).toEqual(types.SET_IDEA);
            });
    });

    it('should deleteIdea', () => {
        const initialState = { ideas: [] };
        const store = mockStore(initialState);
        const existingIdea = { id: '2', title: 'ABC', body: 'XYZ' };
        fetch.once(JSON.stringify(existingIdea), { status: 200 });

        return store.dispatch(operations.deleteIdea(existingIdea))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].idea).toEqual(existingIdea);
                expect(actions[0].type).toEqual(types.DELETE_IDEA);
            });
    });
});