import React, { useState, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";
import { addTask } from "../redux/actions";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const AddTask = props => {
    const [input, setInput] = useState("");
    const [show, setShow] = useState(false);

    const handleKeyPress = e => {
        if (e.which === 13 || e.keyCode === 13) {
            handleAddTask();
        }
    };

    const handleAddTask = () => {
        if (!input) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1800);
            return;
        }

        let entry = {
            dateTimeAdded: moment().format("MMMM Do YYYY, h:mm:ss a"),
            name: input,
            completed: false
        };
        props.addTask(entry);
        setInput("");
    };

    const target = useRef(null);

    return (
        <>
            <Input
                onChange={e => setInput(e.target.value)}
                value={input}
                onKeyPress={handleKeyPress}
            />
            <Button ref={target} onClick={handleAddTask}>
                Add
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {props => (
                    <StyledTooltip
                        arrowProps={target}
                        id="overlay-example"
                        {...props}
                    >
                        Please input a task name
                    </StyledTooltip>
                )}
            </Overlay>
        </>
    );
};

export default connect(null, { addTask })(AddTask);

const StyledTooltip = styled(Tooltip)`
    background: ${props => props.theme.green};
    padding: 0.25em 0.5em;
    margin-left: 5px;
    border-radius: 3px;
`;
const Input = styled.input`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid ${props => props.theme.pink};
    border-radius: 3px;
`;

const Button = styled.button`
    background: ${props => (props.active ? "#BD93F9" : "inherit")};
    color: ${props => (props.complete ? "inherit" : "#BD93F9")};
    &:hover {
        background: ${props => props.theme.pink};
        color: ${props => props.theme.backgroundColor};
    }
    &:focus {
        outline: none;
    }
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.pink};
    border-radius: 3px;
`;
