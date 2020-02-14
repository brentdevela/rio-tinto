import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';
import operations from './operations';

const mapStateToProps = (state) => ({
    ideas: state.dashboard.ideas
});

const mapDispatchToProps = {
    onLoadIdeas: operations.getIdeas,
    onNewIdea: operations.postIdea,
    onChangeIdea: operations.putIdea,
    onDeleteIdea: operations.deleteIdea,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);