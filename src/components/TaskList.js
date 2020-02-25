import React from 'react';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { toggleTask, removeTask, addTask } from '../redux/actions';
import Task from './Task'


const TaskList = ({ tasks }) => {

    return (
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
                    <Task key={idx} task={task} />
                )}
            </tbody>
        </StyledTable>
    )
};

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, { addTask, toggleTask, removeTask })(TaskList);

// Styled Components

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


