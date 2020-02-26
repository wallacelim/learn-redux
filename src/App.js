import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Table from "react-bootstrap/Table";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import moment from "moment";
import "./App.css";

const theme = {
    backgroundColor: "#282a36",
    pink: "#bd93f9",
    red: "#fa8072",
    green: "#50fa7b"
};

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
        let entry = {
            dateAdded: moment().format("MMMM Do YYYY, h:mm:ss a"),
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
        <ThemeProvider theme={theme}>
            <AppContainer theme={theme} className="App">
                <Row>
                    <Input
                        onChange={e => setInput(e.target.value)}
                        value={input}
                    />
                    <Button ref={target} onClick={handleAdd}>
                        Add
                    </Button>
                    <Overlay
                        target={target.current}
                        show={show}
                        placement="right"
                    >
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
                                                onClick={() =>
                                                    handleRemove(idx)
                                                }
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
        </ThemeProvider>
    );
}

// Styled Components
const AppContainer = styled.div`
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.pink};
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

const RemoveButton = styled(Button)`
    color: ${props => props.theme.red};
    border: 2px solid ${props => props.theme.red};
    &:hover {
        background: ${props => props.theme.red};
        color: ${props => props.theme.backgroundColor};
    }
`;

const ProgressButton = styled(Button)`
    color: ${props => props.theme.green};
    border: 2px solid ${props => props.theme.green};
    &:hover {
        background: ${props => props.theme.green};
        color: ${props => props.theme.backgroundColor};
    }
`;

const Input = styled.input`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid ${props => props.theme.pink};
    border-radius: 3px;
`;

const StyledTable = styled(Table)`
    text-align: left;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid ${props => props.theme.pink};
    border-radius: 3px;
    min-width: 40vw;
`;

const TableRow = styled.tr`
    margin: 1em;
    padding: 0.25em;
    border: 2px solid ${props => props.theme.pink};
    border-radius: 3px;
`;

const TableHeader = styled.th`
    padding: 1em 3em;
    border-bottom: 2px solid ${props => props.theme.pink};
    text-align: center;
`;

const TableHead = styled.thead`
    border: 2px solid ${props => props.theme.pink};
    color: ${props => props.theme.green};
`;

const TableDesc = styled.td`
    padding: 1em 3em;
    text-align: center;
    color: ${props => props.theme.green};
`;

const StyledTooltip = styled(Tooltip)`
    background: ${props => props.theme.green};
    padding: 0.25em 0.5em;
    margin-left: 5px;
    border-radius: 3px;
`;

export default App;
