import React  from 'react';
import {Button,Text,View, StyleSheet} from 'react-native';


//const Stack = createStackNavigator();
const ExploreScreen = () =>{
    return(
    <View style={styles.container}>
    <Text>ExploreScreen</Text>
    <Button
    title="Clich Here"
    onPress={()=>alert('belill')}
    />
    
    </View>);
  };
export default ExploreScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });