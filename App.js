// Importações necessárias do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Image, ImageBackground, Button, StyleSheet } from 'react-native';

// Componente principal
const LoginScreen = () => {
  // Estados para armazenar os valores dos campos de entrada
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com a ação de login
  const handleLogin = () => {
    // Adicione aqui a lógica de autenticação
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Image source={require('./assets/logo.jpg')} style={styles.logo} resizeMode="center" />
        <Text style={styles.title}>Bem-vindo ao App</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '20%',
    height: '20%',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '50%',
    height: '4%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
});

export default LoginScreen;