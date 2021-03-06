import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;




export const Texto = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;

`
export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-top:30px;
`

export const Button = styled.TouchableOpacity`
  padding: 8px 24px;
  flex:1;
  width:100%;
  height: 60px;
  background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`

export const ButtonText = styled.Text`
  color:${props => props.invert ? "#ae1b73" : "#fff"};
  font-size:16px;
  font-weight:bold;
`





export const InputTexto = styled.Text`
  margin-top:20px;
  color:#b4b8c6;
`
export const Input = styled.TextInput`
  background-color:#ffffff;
  border:1px solid #ffffff;
  height:45px;
  margin-top:5px;
  border-radius:5px;
  padding: 0 20px;
`