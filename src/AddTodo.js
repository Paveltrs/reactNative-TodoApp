import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Alert, Pressable} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
const [value, setValue] = useState('')


const pressHandler = () => {
    if (value.trim()) {
        onSubmit(value)
        setValue('')
    } else {
       Alert.alert('Название дела не может быть пустым.')
    }
}

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder="Введите название дела..."
            autoCorrect={false}
            />
            <Pressable style={styles.button}
            onPress={pressHandler}
            >
                <Text style={styles.text}>Добавить</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: '10%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#90CAF9'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#90CAF9',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})