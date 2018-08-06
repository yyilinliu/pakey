import React from 'react';
import { View, Text} from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button} from 'react-native-elements'

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Login'
  });

  login(){
    fetch('https://ee4f8815.ngrok.io/login', {
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
      this.props.navigation('Login')
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
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <FormValidationMessage>
            {this.state.password ? null : 'this field is required'}
          </FormValidationMessage>
        </View>
        <Button raised title='submit'
          onPress={() => {
            this.login();
          }}/>
        <Button raised title='register'
          onPress={() => navigate('Register')}
        />
      </View>
    )
  }
}
