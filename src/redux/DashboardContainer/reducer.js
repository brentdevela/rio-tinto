import { remove, cloneDeep, findIndex } from 'lodash';
import types from './types';

const initialState = {
    ideas: [],
};

const ideasDashboard = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_IDEAS:
            return { ...state, ideas: action.ideas};
        case types.SET_IDEA: {
            const clonedIdeas = cloneDeep(state.ideas);
            const index = findIndex(clonedIdeas, (idea) => idea.id === action.idea.id);
            clonedIdeas[index] = action.idea;
            return { ...state, ideas: clonedIdeas };
        }
        case types.CREATE_IDEA: {
            const clonedIdeas = cloneDeep(state.ideas);
            clonedIdeas.push(action.idea);
            return { ...state, ideas: clonedIdeas };
        }
        case types.DELETE_IDEA: {
            const newIdeas = cloneDeep(state.ideas);
            remove(newIdeas, (idea) => idea.id === action.idea.id);
            return { ...state, ideas: newIdeas };
        }
        default:
            return state;
    }
};

export default ideasDashboard;