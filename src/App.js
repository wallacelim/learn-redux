import React, { useState, useRef } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import "./App.css";

function App() {
    // Event Handlers
    const handleAdd = () => {
        if (!input) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1800);
            return;
        }
        let date = new Date();
        let entry = {
            dateAdded: `${date
                .getDate()
                .toString()
                .padStart(2, "0")}/${date
                .getMonth()
                .toString()
                .padStart(2, "0")}/${date
                .getFullYear()
                .toString()
                .padStart(4, "0")} ${date
                .getHours()
                .toString()
                .padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")}`,
            taskName: input,
            completed: false
        };
        console.log(entry.dateAdded);
        setEntries([...entries, entry]);
        setInput("");
    };

    const handleRemove = idx => {
        setEntries([...entries.slice(0, idx), ...entries.slice(++idx)]);
    };

    const handleStatusToggle = idx => {
        let updatedEntry = entries[idx];
        updatedEntry.completed = !entries[idx].completed;
        let newEntries = [
            ...entries.slice(0, idx),
            updatedEntry,
            ...entries.slice(++idx)
        ];
        setEntries([...newEntries]);
    };

    // State hooks
    const [entries, setEntries] = useState([]);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");

    // Ref hooks
    const target = useRef(null);

    return (
        <AppContainer className="App">
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
            <Row>
                <StyledTable striped bordered hover>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Date Added</TableHeader>
                            <TableHeader>Task</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Action</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {entries &&
                            entries.map((entry, idx) => (
                                <TableRow key={idx}>
                                    <TableDesc>{entry.dateAdded}</TableDesc>
                                    <TableDesc>{entry.taskName}</TableDesc>
                                    <TableDesc>
                                        <ProgressButton
                                            onClick={() =>
                                                handleStatusToggle(idx)
                                            }
                                        >
                                            {" "}
                                            {entry.completed
                                                ? "COMPLETE"
                                                : "IN-PROGRESS"}{" "}
                                        </ProgressButton>
                                    </TableDesc>
                                    <TableDesc>
                                        <RemoveButton
                                            name={idx}
                                            onClick={() => handleRemove(idx)}
                                        >
                                            Remove
                                        </RemoveButton>
                                    </TableDesc>
                                </TableRow>
                            ))}
                    </tbody>
                </StyledTable>
            </Row>
        </AppContainer>
    );
}

// Styled Components
const AppContainer = styled.div`
    background: #282a36;
    color: #bd93f9;
    min-height: 100vh;
`;

const Row = styled.div`
    display: flex;
    min-width: 100vw;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    background: ${props => (props.active ? "#BD93F9" : "inherit")};
    color: ${props => (props.complete ? "inherit" : "#BD93F9")};
    &:hover {
        background: #bd93f9;
        color: #282a36;
    }
    &:focus {
        outline: none;
    }
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bd93f9;
    border-radius: 3px;
`;

const RemoveButton = styled(Button)`
    color: #fa8072;
    border: 2px solid #fa8072;
    &:hover {
        background: #fa8072;
        color: #282a36;
    }
`;

const ProgressButton = styled(Button)`
    color: #50fa7b;
    border: 2px solid #50fa7b;
    &:hover {
        background: #50fa7b;
        color: #282a36;
    }
`;

const Input = styled.input`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid #bd93f9;
    border-radius: 3px;
`;

const StyledTable = styled(Table)`
    text-align: left;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid #bd93f9;
    border-radius: 3px;
    min-width: 40vw;
`;

const TableRow = styled.tr`
    margin: 1em;
    padding: 0.25em;
    border: 2px solid #bd93f9;
    border-radius: 3px;
`;

const TableHeader = styled.th`
    padding: 1em 3em;
    border-bottom: 2px solid #bd93f9;
    text-align: center;
`;

const TableHead = styled.thead`
    border: 2px solid #bd93f9;
    color: #50fa7b;
`;

const TableDesc = styled.td`
    padding: 1em 3em;
    text-align: center;
    color: #50fa7b;
`;

const StyledTooltip = styled(Tooltip)`
    background: #50fa7b;
    padding: 0.25em 0.5em;
    margin-left: 5px;
    border-radius: 3px;
`;

export default App;
