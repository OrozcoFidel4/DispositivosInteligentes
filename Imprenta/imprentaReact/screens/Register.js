import {useState, useEffect,} from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'


const Register = () => {

    //Codigo para navigation
    const navigation = useNavigation();

    //Codigo para validacion
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const latinChars = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s\'\-]*)$/gi;
    const emailChars = /\S+@\S+\.\S+/
    const phoneChars = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    useEffect(() => {

        // Trigger form validation when name, 
        // email, or password changes
        validateForm();
    }, [name, email, password]);

    const validateForm = () => {
        let errors = {};

        // Validate name field
        if (!name) {
            errors.name = 'Nombre es obligatorio';
        }else if (!latinChars.test(name)){
            errors.name = 'Nombre solo debe contener letras'
        }

        // Validate email field
        if (!email) {
            errors.email = 'Email es obligatorio';
        } else if (!emailChars.test(email)) {
            errors.email = 'Email no es valido';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password es obligatorio';
        } else if (password.length() < 6) {
            errors.password = 'Password debe contener al menos 6 caracteres';
        }

        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };


    //Codigo para selectInput
    const [selected, setSelected] = useState("");
    const data = [
        {key:'1', value:'Administrador'},
        {key:'2', value:'Empleado'},
        {key:'3', value:'Tecnico'},
    ]

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
                    }}>Registro</Text>
                    
                    <GestureHandlerRootView>
                    <TextInput style={styles.input} placeholder='Nombre' value={name} onChangeText={setName}></TextInput>

                    <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail}></TextInput>

                    <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}></TextInput>

                    <SelectList boxStyles={{
                        width:'80%', 
                        borderRadius:'30%', 
                        margin:10, 
                        alignSelf:'center',
                        backgroundColor: '#d1d1d1',
                        borderColor: '#d1d1d1',
                        }} 
                        dropdownStyles={{width:'80%', alignSelf:'center'}}
                        placeholder='Rol' 
                        inputStyles={{color: 'gray'}}
                        setSelected={(val) => setSelected(val)} data={data} save="value"/>

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
                        style={styles.textoBoton}>Registrar &#x2192;
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
        padding: 20,

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

export default Register

