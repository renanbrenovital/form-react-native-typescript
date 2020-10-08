import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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