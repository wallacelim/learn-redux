import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default function App() {

    // State hooks
    const [entries, setEntries] = useState([]);
    const [show, setShow] = useState(false);

    // Ref hooks
    const target = useRef(null);

    return (
        <AppContainer className="App">
            <Row>
                <AddTask />
            </Row>
            <Row>
                <TaskList />
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