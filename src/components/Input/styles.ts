import styled from 'styled-components/native';
import { TextInput as Input } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface TextErrorProps {
  children?: string;
}

export const Container = styled.View`
  width: 100%;
  background-color: snow;
  margin-bottom: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const TextInput = styled(Input)`
  background-color: transparent;
  width: 90%;
  font-size: 16px;
  padding-right: 22px;
  border: none;
`;

export const TextError = styled.Text<TextErrorProps>`
  display: ${({ children }) => children ? 'flex': 'none'};
  width: 90%;
  color: red;
  text-align: center;
  font-size: 10px;
  padding: 5px;
`;

export const IconContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 22px;
  opacity: 0.5;
`;

export const IconError = styled(MaterialIcons).attrs(() => ({
  name: 'error-outline'
}))``;