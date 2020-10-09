import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
`;

export const IconDocument = styled(AntDesign).attrs(() => ({
  name: 'Safety'
}))``;

export const IconPerson = styled(IconDocument).attrs(() => ({
  name: 'user'
}))``;

export const IconEmail = styled(IconDocument).attrs(() => ({
  name: 'mail'
}))``;

export const IconSignIn = styled(MaterialCommunityIcons).attrs(() => ({
  name: 'login'
}))``;

export const IconCreateAccount = styled(MaterialCommunityIcons).attrs(() => ({
  name: 'account-plus'
}))``;
