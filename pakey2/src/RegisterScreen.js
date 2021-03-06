import React from 'react';
import { View, Text, Image } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button} from 'react-native-elements'

export default class RegisterScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Register'
  });

  register(){
    fetch('http://eecea53d.ngrok.io/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
      })
    }).then((resp)=> resp.json())
    .then(response => {
      console.log('Success:', response)
      this.props.navigation.navigate('Login')
    })
    .catch(error => console.log('Error:', error))
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <View>
          <FormLabel>EMAIL</FormLabel>
          <FormInput
            placeholder="email"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <FormValidationMessage>
            {this.state.email ? null : 'this field is required'}
          </FormValidationMessage>
        </View>
        <View>
          <FormLabel>PASSWORD</FormLabel>
          <FormInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <FormValidationMessage>
            {this.state.password ? null : 'this field is required'}
          </FormValidationMessage>
        </View>
        <Button raised title='submit'
          backgroundColor={'#66c2ff'}
          style={{padding: 10}}
        onPress={() => {
          this.register();
        }}/>
        <Button raised title='login'
          backgroundColor={'blue'}
          style={{padding: 10}}
          onPress={() => {
            navigate('Login');
          }}
        />
      </View>
    )
  }
}
