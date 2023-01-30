
import React from 'react';
import{View,StyleSheet,TextInput,StatusBar,Switch,Text, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';


export default function Main(){
    const [isEnabled, setIsEnabled] = React.useState(false);
    const[sexo, setSexo]= React.useState()
    const[limite,setLimite]=React.useState(0);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.container}>
             
             <View style={styles.form}>
             <Text style={styles.titulo}>Tela de Cadastro</Text> 
                <View>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput style={styles.inputText} />
                    <Text style={styles.label}>Idade:</Text>
                    <TextInput style={styles.inputText} />
                </View>
                <View>
                    <Text style={styles.label}>Sexo:</Text>
                    <View style={styles.selectSexoArea}>
                        <Picker
                            selectedValue={sexo}
                            onValueChange={(valor,index)=>setSexo(valor)}
                            style={styles.selectSexo}
                            mode='dropdown'
                        
                        >
                            <Picker.Item label="Masculino" value="M" />
                            <Picker.Item label="Feminino" value="F" />                
                        </Picker>
                    </View>
                </View>
                <View style={styles.limiteArea}>
                    <Text style={styles.label}>Limite: {limite.toFixed(2)}</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={1000}
                        step={10}
                        value={limite}
                        onValueChange={(value)=>setLimite(value)}
                    />
                </View>
            <View style={styles.areaEstudante}>
                <Text style={[styles.label,{marginRight:20}]}>Estudante:</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#32c2b9' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{marginTop:5}}
                />
            </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Abrir Conta</Text>
                </TouchableOpacity>



                

            </View>  

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#7345d6",
      width:"100%",
      
      paddingBottom:40,
      paddingLeft:15,
      paddingRight:15,
      color:"#ffffff",
    //   justifyContent:''

     
    },
    limiteArea:{
        marginTop:20,
    },
    selectSexoArea:{
        borderColor:"#ffff",
        borderWidth:2,
        height:50,
        borderRadius:30,
        // alignItems:'center',
        justifyContent:'center'

    },
    selectSexo:{
        color:'#fff',
        marginLeft:10
    },
    titulo:{
        color:"#ffffff",
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
        
    },

    form:{
        flex:1,
        justifyContent:'center',      
    },

    areaEstudante:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },

    button:{
        marginTop:40,
        borderColor:"#ffff",
        borderWidth:5,
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold'
    },

    label:{
        color:'#fff',
        fontSize:20
    },
    inputText:{
        borderColor:"#ffff",
        borderWidth:2,
        height:50,
        borderRadius:30,
        paddingLeft:20,
        fontSize:20,
        color:"#fff",
        marginBottom:20
        // alignItems:'center',
        // justifyContent:'center'

    }

    
    
});
