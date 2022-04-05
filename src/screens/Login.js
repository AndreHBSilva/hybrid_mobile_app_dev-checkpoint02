import React, { useState }from 'react'
import {
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const LoginScreen = ({navigation}) => {
    const [textInputUsuario, setTextInputUsuario] = useState('')
    const [textInputSenha, setTextInputSenha] = useState('')
    const [hideSenha, setHideSenha] = useState(true)
    return (
        <View style = { styles.container}>
            <ImageBackground source={require('../../assets/fiap_bkg.png')} style={styles.imgBkg}>
                <Image source={require('../../assets/fiap_logo.png')} style={styles.imgLogo}/>
                <Text style={styles.text}> Entrar </Text>
                <TextInput
                    value={textInputUsuario}
                    onChangeText={(value) => setTextInputUsuario(value)}
                    style={styles.inputText}
                    placeholder='Username'
                    placeholderTextColor = "#fff"
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                />
    
                <View style={styles.inputArea}>
                    <TextInput
                        value={textInputSenha}
                        onChangeText={(value) => setTextInputSenha(value)}
                        style={styles.inputPassword}
                        placeholder='Senha'
                        placeholderTextColor = "#fff"
                        keyboardType='default'
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={() => setHideSenha(!hideSenha)}>
                        <Ionicons 
                            name ="eye" 
                            color="#fff"
                            size={25}
                            />
                    </TouchableOpacity>
                </View>
                <Pressable style={styles.button} onPress={()=> navigation.replace('Home')}>
                    <Text style={styles.medText}>Entrar</Text>
                </Pressable>
                <View style={styles.container1B}>
                        <Pressable style={styles.smallerButton} onPress={()=> navigation.navigate('Home')}>
                            <Text style={styles.smallerText}>Cadastrar</Text>
                        </Pressable>

                        <Pressable style={styles.smallerButtonR} onPress={_=>alert('Usuario e Senha enviado por email!')}>
                            <Text style={styles.smallerText}>Esqueceu a Senha</Text>
                        </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    container1B: {
        flexDirection: 'row',
        width: '100%',
    },

    medText:{
        color: '#fff',
        fontSize: 20,  
    },

    smallerText:{
        color: '#fff',
        fontSize: 15,  
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center', 
        paddingVertical: 12,
        paddingHorizontal: 32, 
        borderRadius: 5,
        backgroundColor: '#ee125a',
        marginTop: 20,
        elevation: 3,
        width: '100%',
    },

    smallerButton: {
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 3,
        width: '30%',
    },

    smallerButtonR: {
        alignItems: 'flex-end',
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 3,
        width: '70%',
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    imgBkg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    imgLogo: {
        resizeMode: 'contain',
        width: 200,
        height: 100,
    },

    inputText: {
        color: '#fff',
        fontSize: 20,
        padding: 18,
        marginTop: 20,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    inputArea:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginTop: 20,
        height: 60,
        alignItems: 'center',
    },

    inputPassword:{
        width: '85%',
        height: 50,
        color: '#fff',
        padding: 18,
        fontSize: 18,
    },

    icon:{
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LoginScreen