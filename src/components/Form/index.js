import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form(props){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)

function imcCalculator(){
  let heightFormat = height.replace(",",".")
  return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
}

function verificationImc(){
  if (imc == null){
    Vibration.vibrate()
    setErrorMessage("Campo Obrigatorio")
  }
}

function validationImc(){
  if(weight != null && height != null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu imc é igual:")
    setTextButton("Calcular Novamente")
    setErrorMessage(null)
    return
  }
  verificationImc()
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
  
}

  return(
    <Pressable onPress={Keyboard.dismiss} style={styles.FormContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <text style={styles.errorMessage}>{errorMessage}</text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="EX. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <text style={styles.errorMessage}>{errorMessage}</text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="EX. 90.720"
          keyboardType="numeric"    
        />
        <TouchableOpacity 
        style={styles.buttonCalculator}
          onpress={() =>{
            validationImc()
          }}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </Pressable>
    )
}
