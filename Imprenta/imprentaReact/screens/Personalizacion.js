import { useState, useEffect, React } from 'react'; 
import {Text, TouchableOpacity, ScrollView, StyleSheet, View, Image, Dimensions} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Clock from '../components/clock';
import * as ImagePicker from 'expo-image-picker';
import { SelectList } from 'react-native-dropdown-select-list';


const Personalizacion = () => {

    // State variables to store form inputs, 
    // errors, and form validity
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [ancho, setAncho] = useState('');
    const [alto, setAlto] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const latinChars = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s\'\-]*)$/gi;
    const emailChars = /\S+@\S+\.\S+/
    const phoneChars = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const dimensionChars = /^[-+]?[0-9]+\.[0-9]+$/;

    useEffect(() => {

    // Validacion Script
        validateForm();
    }, [name, phone, ancho, alto]);

    const validateForm = () => {
        let errors = {};

        // Validar Nombre
        if (!name) {
            errors.name = 'El nombre es obligatorio';
        }else if (!latinChars.test(name)){
            errors.name = 'El nombre solo debe contener letras'
        }

        //Validar Telefono
        if (!phone) {
            errors.phone = 'Telefono es obligatorio';
        } else if (!phoneChars.test || phone.length < 10 || phone.length >= 11) {
            errors.phone = 'Telefono debe contener 10 digitos';
        }

        // Validar Ancho
        if (!ancho) {
            errors.ancho = 'Ancho es obligatorio';
        } else if (!dimensionChars.test(ancho)) {
            errors.ancho = 'La medida Ancho debe ser en formato: XX.XX Mts';
        }

        if (!alto) {
            errors.alto = 'Alto es obligatorio';
        } else if (!dimensionChars.test(alto)) {
            errors.alto = 'La medida Alto debe ser en formato: XX.XX Mts';
        }

        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    // Codigo para la navegacion 
    const navigation = useNavigation();

    //Codigo para SelectList
    const [selected, setSelected] = useState('');
    const data = [
        {key:'1', value:'Camisa'},
        {key:'2', value:'Sudadera'},
        {key:'3', value:'Taza'},
        
    ]

    // Codigo para cargar imagen
    const [image, setImage] = useState('')

    const handleImagePickerPress = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
        quality: 1,})

        if (!result.canceled){
            setImage(result.assets[0].uri)
        }
    }

    //Codigo para Scroll
    const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

    useEffect(() => {
        // Función para actualizar las dimensiones cuando cambian
        const onChange = ({ window }) => {
        setScreenDimensions(window); // Actualiza el estado con las nuevas dimensiones
        };

        // Agregar el listener para cuando cambien las dimensiones
        Dimensions.addEventListener('change', onChange);


        
    }, []);

    const { width, height } = screenDimensions; // Obtener las dimensiones actuales

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={[styles.scrollViewContainer, { height }]}>
                    

                <View style={styles.superior}>
                    
                    <Text 
                    style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                    }}>Modulo Personalizacion</Text>

                    <Clock></Clock>

                </View>

                <View style={styles.superior2}>
                    
                    <Text 
                    style={{
                            fontSize: 15,
                            marginTop: 5,
                            color: 'gray'
                    }}>Usuario</Text>
                </View>
                    
                {image && <Image source={{ uri: image }} style={styles.image} />}

                <TouchableOpacity style={styles.botonCarga}onPress={handleImagePickerPress}>

                    <Text
                        style={styles.textoBoton}>Cargar Diseño
                    </Text>

                </TouchableOpacity>

                <View>

                    <SelectList boxStyles={{
                        width:'80%', 
                        borderRadius:'30%', 
                        margin:10, 
                        alignSelf:'center',
                        backgroundColor: '#d1d1d1',
                        borderColor: '#d1d1d1',
                        }} 
                        dropdownStyles={{width:'80%', alignSelf:'center'}}
                        placeholder='Objeto' 
                        inputStyles={{color: 'gray'}}
                        setSelected={(val) => setSelected(val)} data={data} save="value"/>

                    {selected === 'Camisa' && <Text 
                    style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginLeft: 15,
                            marginBottom: 20
                    }}>Camisa</Text>}

                    {selected === 'Sudadera' && <Text 
                    style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginLeft: 15,
                            marginBottom: 20
                    }}>Sudadera</Text>}

                    {selected === 'Taza' && <Text 
                    style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginLeft: 15,
                            marginBottom: 20
                    }}>Taza</Text>}
                    
                    
                    
                    
                </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    scrollViewContainer:{
        flexGrow:1,
    },

    superior: {
        marginTop: '5%',
        flexDirection:'row',
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
    },

    superior2: {
        marginBottom: '10%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 15
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

    inputDoble:{
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: -10,
        borderRadius: 30, 
        backgroundColor: '#d1d1d1',
        width: '40%',
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

    botonCarga:{
        alignSelf: 'center',
        backgroundColor:'gray',
        padding:10,
        marginTop: 10,
        marginBottom: '10%',
        width: '50%',
        borderRadius: 10
    },

    textoBoton:{
        color:'white',
        textAlign: 'center',
        fontSize: 15           
    },

    image: {
        width: '30%',
        height: '30%',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 5,
        marginBottom: '5%'
    },

    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 5,
        alignSelf: 'center'
    },


    });

export default Personalizacion

