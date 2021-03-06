import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;
`;

export const CaixaLogin = styled.View`
  width:100%;
  background-color:#fff;
  border-top-right-radius:25px;
  border-top-left-radius:25px;
  padding:20px;
`;


export const ContainerBotoes = styled.View`
 flex-direction:row;

`;
export const Botao = styled.TouchableOpacity`
  border-bottom-width:4px;
  border-bottom-color:${props => props.lastClick ? "#AE1B73" : "#fff"};
  height:40px;
  margin: 0px 5px;
  flex:1;
  justify-content:center;
  align-items:center;

`
export const BotaoTexto = styled.Text`
  font-size:20px;
  color:${props => props.lastClick ? "#673f66" : "#ccc"};
`

export const Input = styled.TextInput`
  border:1px solid #ccc;
  height:45px;
  margin-top:5px;
  border-radius:5px;
  padding: 0 20px;
`
export const InputTexto = styled.Text`
  margin-top:20px;
  color:#b4b8c6;
`

export const ForgotPassword = styled.TouchableHighlight`
  color:#ae1b73;
  font-size:14px;
  text-align:right;
  margin-top:5px;
`

export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-top:30px;
`

export const ContainerSenha = styled.View`
  flex-direction:row;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 50px;
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

export const Logo = styled.View`
  marginBottom: 24px;
 flex:1;
 justify-content:center;
 align-items:center;
`
export const CaixaTextoChamada = styled.View`
 flex:1;
 justify-content:center;
 align-items:center;
 marginBottom: 24px;
`

export const TextoChamada = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;

`

export const TextoGrupou = styled.Text`
 font-weight:bold;
`
export const BotaoSenha = styled.View`
  margin-top:2px;
  padding:2px;
`