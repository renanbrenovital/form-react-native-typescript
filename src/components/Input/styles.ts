import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const InputContainer = styled.View`
  width: 100%;
  background-color: snow;
  margin-bottom: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  background-color: transparent;
  width: 90%;
  font-size: 16px;
  padding-right: 22px;
  border: none;
  text-transform: uppercase;
`;