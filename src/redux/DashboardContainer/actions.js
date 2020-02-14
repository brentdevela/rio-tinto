import types from './types';

const setIdeas = (ideas) => ({
    type: types.SET_IDEAS,
    ideas
});

const setIdea = (idea) => ({
   type: types.SET_IDEA,
   idea
});

const createIdea = (idea) => ({
   type: types.CREATE_IDEA,
   idea,
});

const deleteIdea = (idea) => ({
   type: types.DELETE_IDEA,
   idea,
});

export default {
    setIdeas,
    setIdea,
    createIdea,
    deleteIdea,
}