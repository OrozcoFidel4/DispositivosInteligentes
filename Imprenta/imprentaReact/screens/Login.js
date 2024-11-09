import { useState, useEffect, React } from 'react'; 
import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';


const Login = () => {

    const navigation = useNavigation();

    //Codigo para Validacion
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const emailChars = /\S+@\S+\.\S+/

    useEffect(() => {

        // Trigger form validation when name, 
        // email, or password changes
        validateForm();
    }, [email, password]);

    const validateForm = () => {
        let errors = {};

        // Validate email field
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!emailChars.test(email)) {
            errors.email = 'Email is invalid.';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password is required.';
        }


        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    

                    <View style={styles.box}>
                    <Text 
                    style={{
                            alignSelf: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20
                    }}>Inicio De Sesion</Text>
                    
                    <GestureHandlerRootView>
                    <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail}></TextInput>

                    <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}></TextInput>
                    </GestureHandlerRootView>

                    {Object.values(errors).map((error, index) => (
                        <Text key={index} style={styles.error}>
                            {error}
                        </Text>
                    ))}


                    <TouchableOpacity
                    onPress={() => navigation.navigate('Services')}
                    style={styles.boton}>

                        <Text
                        style={styles.textoBoton}>Iniciar Sesion &#x2192;
                        </Text>

                    </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    box: {
        marginTop: '10%'
    },

    input:{
        alignSelf: 'center',
        margin: 10,
        borderRadius: 30, 
        backgroundColor: '#d1d1d1',
        width: '80%',
        height: 50,
        paddingLeft: 20,

    },

    boton:{
        alignSelf: 'center',
        backgroundColor:'red',
        padding:10,
        marginTop: '5%',
        marginBottom: '5%',
        width: '50%',
        borderRadius: 10
    },

    textoBoton:{
        color:'white',
        textAlign: 'center',
        fontSize: 15           
    },

    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 5,
        alignSelf: 'center'
    },
    });

export default Login

