import React  from 'react';
import {Button,Text,View, StyleSheet} from 'react-native';


//const Stack = createStackNavigator();
const  DetailsScreen = ({navigation}) =>{
   
    
        return(
    <View style={{flex:1 , alignItems: 'center' ,justifyContent:'center'}}>
  <Text>Details  Screen</Text>
  <Button
  title="Go to details Screen...again"
  onPress={()=>navigation.push("Details")}
  
  />
  <Button
  title="Go to Home"
  onPress={()=>navigation.navigate("Home")}
  />
  <Button
  title="Go Back"
  onPress={()=>navigation.goBack()}
  />
  <Button
  title="Go to the First screen"
  onPress={()=>navigation.popToTop()}
  
  />
  </View>);

   
};
export default DetailsScreen;
const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'red',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
