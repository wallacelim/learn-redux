import React, { useState } from 'react';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import './App.css';

function App() {

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

    const Active = styled.text`
        color: #BD93F9;
        background: #50FA7B;
    `

    const Button = styled.button`
        background: ${props => props.active ? "#BD93F9" : "inherit"};
        color: ${props => props.active ? "inherit" : "#BD93F9"};
        &:hover {
            background: #BD93F9;
            color: #282A36;
        }
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BD93F9;
        border-radius: 3px;
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

    const handleAdd = () => {
        let date = new Date()
        let entry = {
            dateAdded: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
            taskName: document.getElementById('taskInput').value,
            status: "in-progress"
        }
        setEntries([...entries, entry])
    }

    const handleRemove = e => {
        let toRemove = e.target.getAttribute("name")
        console.log(toRemove)
        setEntries(entries.filter((entry) => entry != toRemove))
    }

    const [entries, setEntries] = useState([])

    return (
        <AppContainer className="App">
            <Row>
                <Input id="taskInput" />
                <Button onClick={handleAdd
                }>Add</Button>
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
                        {entries.map(entry =>
                            <TableRow>
                                <TableDesc>{entry.dateAdded}</TableDesc>
                                <TableDesc>{entry.taskName}</TableDesc>
                                <TableDesc>{entry.status}</TableDesc>
                                <TableDesc>
                                    <Button name={entry} onClick={handleRemove}>Remove</Button>
                                </TableDesc>
                            </TableRow>
                        )}
                    </tbody>
                </StyledTable>
            </Row>
        </AppContainer>
    );
}

export default App;
