import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import styled from "styled-components";
import moment from "moment";

const AddTask = props => {
    const handleAdd = () => {
        if (!input) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1800);
            return;
        }
        let entry = {
            dateAdded: moment().format("MMMM Do YYYY, h:mm:ss a"),
            taskName: input,
            completed: false
        };
        console.log(entry.dateAdded);
        props.setEntries([...props.entries, entry]);
        setInput("");
    };

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");

    const target = useRef(null);

    return (
        <Row>
            <Input onChange={e => setInput(e.target.value)} value={input} />
            <Button ref={target} onClick={handleAdd}>
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
        </Row>
    );
};

export default AddTask;

const Row = styled.div`
    display: flex;
    min-width: 100vw;
    align-items: center;
    justify-content: center;
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

const StyledTooltip = styled(Tooltip)`
    background: ${props => props.theme.green};
    padding: 0.25em 0.5em;
    margin-left: 5px;
    border-radius: 3px;
`;
