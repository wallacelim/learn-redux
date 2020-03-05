import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleTask, removeTask } from '../redux/actions'

const Task = (props) => {
    return (
        <TableRow key={props.idx}>
            <TableDesc>{props.task.dateTimeAdded}</TableDesc>
            <TableDesc>{props.task.name}</TableDesc>
            <TableDesc>
                <ProgressButton name={props.idx} onClick={() => props.toggleTask(props.task)}> {props.task.completed ? "COMPLETE" : "IN-PROGRESS"} </ProgressButton>
            </TableDesc>
            <TableDesc>
                <RemoveButton name={props.idx} onClick={() => props.removeTask(props.task)}>Remove</RemoveButton>
            </TableDesc>
        </TableRow>
    )
}

export default connect( null , {toggleTask, removeTask}) (Task);

const TableRow = styled.tr`
    margin: 1em;
    padding: 0.25em;
    border: 2px solid #BD93F9;
    border-radius: 3px;
`

const TableDesc = styled.td`
    padding: 1em 3em;
    text-align: center;
    color: #50FA7B;
`

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