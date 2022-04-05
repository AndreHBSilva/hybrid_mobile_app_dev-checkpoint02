import React, {useState, Component}from 'react'
import {
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
    ScrollView,
    
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
//npm install react-native-paper
import { RadioButton } from 'react-native-paper'
import CheckBox from '../components/CheckBox'


const HomeScreen = ({navigation}) => {

    const [textInputCadUsuario, setTextInputCadUsuario] = useState('')
    const [textInputNomeCompleto, setTextInputNomeCompleto] = useState('')
    const [textInputSenha, setTextInputSenha] = useState('')
    const [hideSenha, setHideSenha] = useState(true)
    const [textInputConfSenha, setTextInputConfSenha] = useState('')
    const [hideConfSenha, setHideConfSenha] = useState(true)
    const [checked, setChecked] = React.useState('Masculino')
    const [termos, setTermos] = useState(false)
    const [email, setEmail] = useState(false)

    const msgSenhaErrada = () =>{
        Alert.alert(
            "SENHAS ERRADAS",
            "As senhas informadas não são identicas!",
            [
                {text: "OK"}
            ]
        )
    }
    const limpaReg = () =>{
        [textInputCadUsuario, setTextInputCadUsuario] = useState('')
    }
    
    const msgSucesso = () =>{

        Alert.alert(
            'SUCESSO',
            '\nUsername: ' + textInputCadUsuario +
            '\nNome Completo: ' + textInputNomeCompleto +
            '\nSenha: ' + textInputSenha + 
            '\nConfirma Senha: ' + textInputConfSenha + 
            '\nGenero: '+ checked,
            [
                {text: "OK"}
            ]
        )  

    }

    const validaSenhas = () =>{
        return textInputSenha === textInputConfSenha;
    }
    
    return (

        <ScrollView>
        <View style = { styles.container}>
        <ImageBackground source={require('../../assets/fiap_bkg.png')} style={styles.imgBkg}>
        <View style={styles.titulo}>
            <Image source={require('../../assets/fiap_logo.png')} style={styles.imgLogo}/>
           
                <Text style={styles.text}> Cadastrar </Text>
            </View>
            
                <TextInput
                    value={textInputCadUsuario}
                    onChangeText={(value) => setTextInputCadUsuario(value)}
                    style={styles.inputText}
                    placeholder='Username'
                    placeholderTextColor = "#fff"
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    value={textInputNomeCompleto}
                    onChangeText={(value) => setTextInputNomeCompleto(value)}
                    style={styles.inputText}
                    placeholder='Nome Completo'
                    placeholderTextColor = "#fff"
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                />
                <View style={styles.inputArea}>
                    <TextInput
                        value={textInputSenha}
                        onChangeText={( value) => setTextInputSenha(value)}
                        style={styles.inputPassword}
                        placeholder='Senha'
                        placeholderTextColor = "#fff"
                        secureTextEntry={hideSenha}
                    />
                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={() => setHideSenha(!hideSenha)}>
                        {
                            hideConfSenha ? <Ionicons 
                            name ="eye" 
                            color="#fff"
                            size={20}
                            /> :
                            <Ionicons 
                            name ="eye-off" 
                            color="#fff"
                            size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.inputArea}>
                    <TextInput
                        value={textInputConfSenha}
                        onChangeText={(value) => setTextInputConfSenha(value)}
                        style={styles.inputPassword}
                        placeholder='Confirmar Senha'
                        placeholderTextColor = "#fff"
                        secureTextEntry={hideConfSenha}
                    />
                    <TouchableOpacity 
                        style={styles.icon}
                        onPress={() => setHideConfSenha(!hideConfSenha)}>
                        {
                            hideConfSenha ? <Ionicons 
                            name ="eye" 
                            color="#fff"
                            size={20}
                            /> :
                            <Ionicons 
                            name ="eye-off" 
                            color="#fff"
                            size={20}
                            />
                        }
                        
                    </TouchableOpacity>
                </View>                   
                <Text style={styles.medText}>Sexo: </Text>   

                <RadioButton.Item
                    value="Masculino" 
                    color='#ee125a'
                    labelStyle = {styles.smallerText}
                    label="Masculino"
                    position='leading'
                    style={{ flexDirection: 'row', justifyContent: 'flex-start'}}
                    status={ checked === 'Masculino' ? 'checked' : 'unchecked' } 
                    onPress={() => setChecked('Masculino')} 
                />
                <RadioButton.Item
                    value="Feminino"
                    color='#ee125a'
                    labelStyle = {styles.smallerText}
                    position = 'leading'
                    label="Feminino"
                    status={ checked === 'Feminino' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('Feminino')}
                />
       
                <CheckBox
                    onPress={() => setTermos(!termos)}
                    title="Li e concordo com os termos de uso"
                    isChecked={termos}
                />
                <CheckBox
                    onPress={() => setEmail(!email)}
                    title="Aceito receber emails"
                    isChecked={email}
                    
                />
    
                <Pressable style={styles.button} onPress={() => {
                    validaSenhas() ? msgSucesso() : msgSenhaErrada();
                }}>
                    <Text style={styles.medTextBtn}>Cadastrar</Text>

                </Pressable>
                <Pressable style={styles.button} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.medTextBtn}>Voltar</Text>
                </Pressable>
                
        </ImageBackground>
     
    </View>
   
    </ScrollView>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    medTextBtn:{
        color: '#fff',
        fontSize: 20, 
    },

    titulo:{
        alignItems: 'center',
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
        padding: 15,
        fontSize: 18,
    },

    icon:{
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    medText:{
        color: '#fff',
        fontSize: 20, 
        marginTop: 20, 
    },

    smallerText:{
        color: '#fff',
        fontSize: 15,  
    },



    smallerButton: {
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 3,
        width: '50%',
    },

    smallerButtonR: {
        alignItems: 'flex-end',
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 3,
        width: '50%',
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },

    imgBkg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 16,
    },

    imgLogo: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },

    inputText: {
        color: '#fff',
        fontSize: 18,
        padding: 18,
        marginTop: 20,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
})

export default HomeScreen