import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import { cloneDeep, noop } from 'lodash';
import { IoIosClose } from 'react-icons/io';
import Idea from '../../models/Idea';

import './index.css';

const Tile = (props) => {

    const [ idea, setIdea ] = useState(props.idea);
    let title;
    useEffect(() => {
        if (props.isFocused) {
            ReactDOM.findDOMNode(title).focus();
        }
    });

    const onClickDelete = () => {
      props.onDeleteIdea(props.idea);
    };

    const onInputChange = (e) => {
        const updatedIdea = cloneDeep(idea);
        updatedIdea[e.target.id] = e.target.value;
        setIdea(updatedIdea);
    };

    const onInputBlur = () => {
      props.onChangeIdea(idea);
    };

    return (
        <div className="tile">
            <div className="header">
                <div className="id">{idea.id}</div>
                <div className="close" onClick={onClickDelete}>
                    <IoIosClose/>
                </div>
            </div>
            <InputGroup size="sm" className="mb-3">
                <FormControl
                    id="title"
                    placeholder="Title"
                    aria-label="Title"
                    type="text"
                    defaultValue={idea.title}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    ref={ref => { title = ref; }}
                    maxLength={140}
                />
            </InputGroup>
            <InputGroup size="sm">
                <FormControl
                    id="body"
                    placeholder="Body"
                    aria-label="Body"
                    type="text"
                    as="textarea"
                    rows="3"
                    defaultValue={idea.body}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    maxLength={140}
                />
            </InputGroup>
            <div className="footer">
                <div>{idea.createdDate}</div>
            </div>
        </div>
    );
};

Tile.propTypes = {
    idea: Idea.isRequired,
    onChangeIdea: PropTypes.func,
    onDeleteIdea: PropTypes.func,
    isFocused: PropTypes.bool,
};

Tile.defaultProps = {
    onChangeIdea: noop,
    onDeleteIdea: noop,
    isFocused: false,
};

export default Tile;
