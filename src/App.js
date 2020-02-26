import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
    const theme = {
        backgroundColor: "#282a36",
        pink: "#bd93f9",
        red: "#fa8072",
        green: "#50fa7b"
    };
    return (
        <ThemeProvider theme={theme}>
            <AppContainer className="App">
                <Row>
                    <AddTask />
                </Row>
                <Row>
                    <TaskList />
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
