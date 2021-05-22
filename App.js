import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
        <Image 
          style={{width: 350, height: 250}}
          source={require('./assets/images/logo-emeter.png')}
          />
          </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Wachtwoord..." 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Wachtwoord vergeten?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Aanmelden</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f0cb1e",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:13
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#8eca3e",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  signupBtn:{
    width:"60%",
    backgroundColor:"#db514b",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
  },
  signupText:{
    color:"white"
  }
});
