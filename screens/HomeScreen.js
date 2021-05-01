import React  from 'react';
import {Button,Text,View, StyleSheet} from 'react-native';


//const Stack = createStackNavigator();
const HomeScreen = ({navigation}) =>{
    return(<View style={{flex:1 , alignItems: 'center' ,justifyContent:'center'}}>
    <Text>Home Screen</Text>
    <Button
    title="Go to details Screen"
    onPress={()=>navigation.navigate("Details")}
    />
    
    </View>);
  };
export default HomeScreen;
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
