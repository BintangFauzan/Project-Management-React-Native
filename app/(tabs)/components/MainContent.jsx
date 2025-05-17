import {Text, View} from "react-native";
import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from "react";

export default function MainContent({onSavePro}) {
    const [inputValue, setInputValue] = useState({
        title:"",
        description:"",
        date: ""
    });
    const [showDatePicker, setShowDatePicker] = useState(false);
    function handleChange(inputIdentifier,value){
        setInputValue((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: value
            }
        })
    }

    function handleDateShow(){
        setShowDatePicker(true)
    }

    function handleSubmit() {
       if(!inputValue.title || !inputValue.description || !inputValue.date){
           console.log("Isi Semua data")
       }else {
           onSavePro(inputValue);
       }
    }

    console.log(inputValue);

    return (
        <>
            <View>
                <TextInput
                    label="Title"
                    value={inputValue.title}
                    onChangeText={(text) => handleChange("title", text)}
                />
                <TextInput
                    label="Description"
                    value={inputValue.description}
                    onChangeText={(text) => handleChange("description", text)}
                />
                <TextInput
                    label="Date"
                    value={inputValue.date} // Tampilkan tanggal yang diformat
                    onChangeText={(text) => handleChange("date", text)}
                />
                <Button mode="contained" onPress={handleSubmit}>
                    Press me
                </Button>
            </View>
        </>
    )
}
