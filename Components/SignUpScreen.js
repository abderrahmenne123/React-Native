import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
TextInput,
    Image,
   
} from 'react-native';
import Animated from 'react-native-reanimated';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
const SignInScreen = ({navigation})=> {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
        
    });
    const textInputChange = (val) => {
        if( val.length !=0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
               
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
               
            });
        }
    }
    const handlePasswordChange = (val) => {
        
            setData({
                ...data,
              password: val
            });
        
    }
    const updateSecureTextEntry = ()=> {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content'/>
            <View  style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>

            </View>
            <Animated.View  
            animation="fadeInUpBig"
            style={styles.footer}
            >
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}
                />
                <TextInput
                
                placeholder="Your email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) =>textInputChange(val)}
                ></TextInput>
                {data.check_textInputChange ?
               <Feather
                name="check-circle"
                color="green"
                size={20}
                />
                :null }
                </View>
                <Text style={styles.text_footer,{marginTop:35}}>Password</Text>
                <View style={styles.action}>
                <Feather
                name="lock"
                color="#05375a"
                size={20}
                />
                <TextInput
                
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>handlePasswordChange(val)}
                ></TextInput>
               <TouchableOpacity
               onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
               <Feather
                name="eye-off"
                color="grey"
                size={20}
                />
                :
                <Feather
                name="eye"
                color="grey"
                size={20}
                /> }
                </TouchableOpacity>
                
                </View>
                <Text style={styles.text_footer,{marginTop:35}}>Password</Text>
                <View style={styles.action}>
                <Feather
                name="lock"
                color="#05375a"
                size={20}
                />
                <TextInput
                
                placeholder="Confirm Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>handlePasswordChange(val)}
                ></TextInput>
               <TouchableOpacity
               onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
               <Feather
                name="eye-off"
                color="grey"
                size={20}
                />
                :
                <Feather
                name="eye"
                color="grey"
                size={20}
                /> }
                </TouchableOpacity>
                
                </View>
                <View style={styles.button}>
                    <LinearGradient
                    colors={['#08d4cd','#01ab9d']}
                    style={styles.signIn}
                    >
                        <Text style={styles.textSign,{color:'#fff'}}>Sign In</Text>
                    </LinearGradient>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
        
    );
}
export default SignInScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });