import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

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
            style={styles.inputPass}
            placeholder="Wachtwoord..." 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Wachtwoord vergeten?</Text>
        </TouchableOpacity>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/images/emojis.png')}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Aanmelden</Text>
        </TouchableOpacity>
        </ImageBackground>
  
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
    marginTop: 20,
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
    color:"white",
    fontFamily: "KoHo-Bold",
    fontSize: 15
  },
  inputPass:{
    height:50,
    color:"white",
    fontFamily: "KoHo-Bold",
    fontSize: 15
  },
  forgot:{
    color:"black",
    fontSize:15,
    fontFamily: "KoHo-Bold",
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#8eca3e",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
  },
  loginText:{
    color:"white",
    fontFamily: "KoHo-Bold",
    fontSize: 15
  },
  signupBtn:{
    width:"40%",
    backgroundColor:"#db514b",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
  },
  signupText:{
    color:"white",
    fontFamily: "KoHo-Bold",
    fontSize: 15
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1
  }
});
