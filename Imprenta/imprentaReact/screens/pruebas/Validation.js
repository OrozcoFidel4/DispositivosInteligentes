import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Validation = () => {

    // State variables to store form inputs, 
    // errors, and form validity
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const latinChars = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s\'\-]*)$/gi;
    const emailChars = /\S+@\S+\.\S+/
    const phoneChars = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    useEffect(() => {

        // Trigger form validation when name, 
        // email, or password changes
        validateForm();
    }, [name, email, password, phone]);

    const validateForm = () => {
        let errors = {};

        // Validate name field
        if (!name) {
            errors.name = 'Name is required.';
        }else if (!latinChars.test(name)){
            errors.name = 'Name must be only letters'
        }

        // Validate email field
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!emailChars.test(email)) {
            errors.email = 'Email is invalid.';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }

        //Validate phone Number
        if (!phone) {
            errors.phone = 'Phone is required.';
        } else if (!phoneChars.test || phone.length < 10) {
            errors.phone = 'Phone is not valid';
        }

        // Set the errors and update form validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = () => {
        if (isFormValid) {

            // Form is valid, perform the submission logic
            console.log('Form submitted successfully!');
        } else {
            
            // Form is invalid, display error messages
            console.log('Form has errors. Please correct them.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                
            />

            <TouchableOpacity
                style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
                disabled={!isFormValid}
                onPress={handleSubmit}
            >

                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            
            {/* Display error messages */}
            {Object.values(errors).map((error, index) => (
                <Text key={index} style={styles.error}>
                    {error}
                </Text>
            ))}
        </View>
    );
};

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 20,
        marginBottom: 12,
    },
});

export default Validation;
