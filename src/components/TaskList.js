import React from 'react';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { toggleTask, removeTask } from '../redux/actions';


const TaskList = ({ tasks }) => (
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
            {tasks && tasks.map((task, idx) =>
                <TableRow key={idx}>
                    <TableDesc>{task.dateTimeAdded}</TableDesc>
                    <TableDesc>{task.name}</TableDesc>
                    <TableDesc>
                        <ProgressButton name={idx} onClick={toggleTask}> {task.completed ? "COMPLETE" : "IN-PROGRESS"} </ProgressButton>
                    </TableDesc>
                    <TableDesc>
                        <RemoveButton name={idx} onClick={removeTask}>Remove</RemoveButton>
                    </TableDesc>
                </TableRow>
            )}
        </tbody>
    </StyledTable>
);

export default connect(null, {toggleTask}) (TaskList);

// Styled Components

const Button = styled.button`
        background: ${props => props.active ? "#BD93F9" : "inherit"};
        &:focus {
            outline: none;
        }
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
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

