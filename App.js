import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';



export default function login() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri:
            'https://gravatar.com/avatar/18c338175b071639248bc3345d3ecb8c?s=400&d=robohash&r=x',
        }}
      />
      <Input
        placeholder='Email'
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      />

      <Input
        placeholder='Senha'
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />
      
      <Button
  title="Login"
  type="outline"
/>

<Button
  title="cadastro"
  type="outline"
/>
<Button
  title="esqueceu senha?"
  type="clear"
/>
      <StatusBar style="auto" />
    </View>

  );
}
function cadastro() {
  return (
    <View style={styles.container}>
      <Text>Ruan Nasciento Monteiro da Silva</Text>
      <Text>Emily vitoria do nascimento arruda</Text>
      <Text>Gustavo Da Silva Araújo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function EsqueciSenha() {
  return (
    <View style={styles.container}>
      <Text>Ruan Nasciento Monteiro da Silva</Text>
      <Text>Emily vitoria do nascimento arruda</Text>
      <Text>Gustavo Da Silva Araújo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
