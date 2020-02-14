import PropTypes from 'prop-types';

const Idea = PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
});

export default Idea;