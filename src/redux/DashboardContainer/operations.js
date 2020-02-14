import config from '../../config';
import actions from './actions';

const { API_URL } = config;
const json = (body) => body.json();

const getIdeas = () => (dispatch) => {
    const GET_IDEAS = `${API_URL}/ideas`;
    return fetch(GET_IDEAS, { method: 'GET' } )
        .then(json)
        .then((ideas) => {
            dispatch(actions.setIdeas(ideas));
        });
};

const postIdea = () => (dispatch) => {
    const POST_IDEA = `${API_URL}/idea`;
    return fetch(POST_IDEA, { method: 'POST' })
        .then(json)
        .then((idea) => {
            dispatch(actions.createIdea(idea));
        });
};

const putIdea = (idea) => (dispatch) => {
    const PUT_IDEA = `${API_URL}/idea`;
    return fetch(PUT_IDEA, {
            method: 'PUT',
            body: JSON.stringify(idea),
            headers:{'content-type': 'application/json'}
        })
        .then(() => {
            dispatch(actions.setIdea(idea));
        });
};

const deleteIdea = (idea) => (dispatch) => {
    const DELETE_IDEA = `${API_URL}/idea/${idea.id}`;
    return fetch(DELETE_IDEA, {
            method: 'DELETE',
        }).then(() => {
            dispatch(actions.deleteIdea(idea));
        });
};

export default {
    getIdeas,
    postIdea,
    putIdea,
    deleteIdea,
};