import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const theme = {
    backgroundColor: "#282a36",
    pink: "#bd93f9",
    red: "#fa8072",
    green: "#50fa7b"
};

function App() {
    // Event Handlers

    // State hooks
    const [entries, setEntries] = useState([]);

    return (
        <ThemeProvider theme={theme}>
            <AppContainer theme={theme} className="App">
                <AddTask entries={entries} setEntries={setEntries} />
                <TaskList entries={entries} setEntries={setEntries} />
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

export default App;
