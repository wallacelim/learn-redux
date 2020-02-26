import React from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const TaskList = props => {
    const handleRemove = idx => {
        props.setEntries([
            ...props.entries.slice(0, idx),
            ...props.entries.slice(++idx)
        ]);
    };

    const handleStatusToggle = idx => {
        let updatedEntry = props.entries[idx];
        updatedEntry.completed = !props.entries[idx].completed;
        let newEntries = [
            ...props.entries.slice(0, idx),
            updatedEntry,
            ...props.entries.slice(++idx)
        ];
        props.setEntries([...newEntries]);
    };

    return (
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
                    {props.entries &&
                        props.entries.map((entry, idx) => (
                            <TableRow key={idx}>
                                <TableDesc>{entry.dateAdded}</TableDesc>
                                <TableDesc>{entry.taskName}</TableDesc>
                                <TableDesc>
                                    <ProgressButton
                                        onClick={() => handleStatusToggle(idx)}
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
    );
};

export default TaskList;

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
