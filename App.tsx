import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { Container } from "./styles";
import { theme } from './src/theme';
// import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />     
        <SignUp /> 
      </Container>      
    </PaperProvider>
  );
}