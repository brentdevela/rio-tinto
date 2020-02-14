import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Idea from '../../models/Idea';
import Tile from '../Tile';
import { noop } from 'lodash';

import './index.css';

const Dashboard = (props) => {

    const [ newIdea, setNewIdea ] = useState(false);

    useEffect(() => {
        if (props.ideas.length === 0) {
            props.onLoadIdeas();
        }
    });

    const onClickNewIdea = () => {
        props.onNewIdea()
            .then(() => {
                setNewIdea(true);
            });
    };

    const onChangeIdea = (idea) => {
      props.onChangeIdea(idea)
          .then(() => {
              setNewIdea(false);
          }) ;
    };

    const onDeleteIdea = (idea) => {
        props.onDeleteIdea(idea)
            .then(() => {
                setNewIdea(false);
            }) ;
    }

    return (
        <Container fluid className="dashboard">
            <Row>
                <Col>
                    <div className="add-idea d-flex flex-column">
                        <Button variant="primary" onClick={onClickNewIdea}>
                            <IoIosAddCircleOutline /> New Idea
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                {props.ideas.map((idea, idx) =>
                    (<Col key={idea.id} xs>
                        <Tile
                            idea={idea}
                            onChangeIdea={onChangeIdea}
                            onDeleteIdea={onDeleteIdea}
                            isFocused={newIdea && idx === (props.ideas.length - 1)}
                        />
                    </Col>))}
            </Row>
        </Container>
    )
};

Dashboard.propTypes = {
    ideas: PropTypes.arrayOf(Idea).isRequired,
    onLoadIdeas: PropTypes.func,
    onNewIdea: PropTypes.func,
    onChangeIdea: PropTypes.func,
    onDeleteIdea: PropTypes.func,
};

Dashboard.defaultProps = {
  onNewIdea: noop
};


export default Dashboard;