import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import './App.css';

function App() {

    // Event Handlers
    const handleAdd = () => {
        let taskName = document.getElementById('taskInput').value;
        if (!taskName) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1800);
            return;
        }
        let date = new Date();
        let entry = {
            dateAdded: `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')}/${date.getFullYear().toString().padStart(4, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
            taskName: document.getElementById('taskInput').value,
            completed: false
        };
        setEntries([...entries, entry]);
    }

    const handleRemove = e => {
        let toRemove = e.target.getAttribute("name");
        setEntries([
            ...entries.slice(0, toRemove),
            ...entries.slice(++toRemove)
        ]);
    }

    const handleStatusToggle = e => {
        let toToggle = e.target.getAttribute("name");
        let updatedEntry = entries[toToggle]
        entries[toToggle].completed = !entries[toToggle].completed
        let newEntries = [
            ...entries.slice(0, toToggle),
            updatedEntry,
            ...entries.slice(++toToggle)
        ]
        setEntries([...newEntries]);
    }

    // State hooks
    const [entries, setEntries] = useState([]);
    const [show, setShow] = useState(false);

    // Ref hooks
    const target = useRef(null);

    return (
        <AppContainer className="App">
            <Row>
                <Input id="taskInput" />
                <Button ref={target} onClick={handleAdd}>Add</Button>
                <Overlay target={target.current} show={show} placement="right">
                    {props => (
                        <StyledTooltip arrowProps={target} id="overlay-example" {...props}>
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
                        {entries && entries.map((entry, idx) =>
                            <TableRow key={idx}>
                                <TableDesc>{entry.dateAdded}</TableDesc>
                                <TableDesc>{entry.taskName}</TableDesc>
                                <TableDesc>
                                    <ProgressButton name={idx} onClick={handleStatusToggle}> {entry.completed ? "COMPLETE" : "IN-PROGRESS"} </ProgressButton>
                                </TableDesc>
                                <TableDesc>
                                    <RemoveButton name={idx} onClick={handleRemove}>Remove</RemoveButton>
                                </TableDesc>
                            </TableRow>
                        )}
                    </tbody>
                </StyledTable>
            </Row>
        </AppContainer>
    );
}

// Styled Components
const AppContainer = styled.div`
        background: #282A36;
        color: #BD93F9;
        min-height: 100vh;
    `

const Row = styled.div`
        display: flex;
        min-width: 100vw;
        align-items: center;
        justify-content: center;
    `

const Button = styled.button`
        background: ${props => props.active ? "#BD93F9" : "inherit"};
        color: ${props => props.complete ? "inherit" : "#BD93F9"};
        &:hover {
            background: #BD93F9;
            color: #282A36;
        }
        &:focus {
            outline: none;
        }
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BD93F9;
        border-radius: 3px;
    `

const RemoveButton = styled(Button)`
    color: #FA8072;
    border: 2px solid #FA8072;
    &:hover {
            background: #FA8072;
            color: #282A36;
        }
    `

const ProgressButton = styled(Button)`
    color: #50FA7B;
    border: 2px solid #50FA7B;
    &:hover {
            background: #50FA7B;
            color: #282A36;
        }
`

const Input = styled.input`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid #BD93F9;
    border-radius: 3px;
`

const StyledTable = styled(Table)`
        text-align: left;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em;
        border: 2px solid #BD93F9;
        border-radius: 3px;
        min-width: 40vw;
    `

const TableRow = styled.tr`
        margin: 1em;
        padding: 0.25em;
        border: 2px solid #BD93F9;
        border-radius: 3px;
    `

const TableHeader = styled.th`
        padding: 1em 3em;
        border-bottom: 2px solid #BD93F9;
        text-align: center;
    `

const TableHead = styled.thead`
        border: 2px solid #BD93F9;
        color: #50FA7B;
    `

const TableDesc = styled.td`
        padding: 1em 3em;
        text-align: center;
        color: #50FA7B;
    `

const StyledTooltip = styled(Tooltip)`
    background: #50FA7B;
    padding: 0.25em 0.5em;
    margin-left: 5px;
    border-radius: 3px;
`


export default App;
