
import React from 'react';
import{View,StyleSheet,Modal,Pressable,TextInput,Switch,Text, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';


export default function Main(){
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [nome, setNome] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const[sexo, setSexo]= React.useState('M')
    const[limite,setLimite]=React.useState(0);
  
  const [modalVisible, setModalVisible] = React.useState(false);
  function ve(v){
    console.log(v);
  }

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Dados Cadastrais!</Text>
            <View style={styles.modalData}>
                <Text style={styles.modalText}>Nome: {nome}</Text>
                <Text style={styles.modalText}>Idade: {idade}</Text>
                <Text style={styles.modalText}>Sexo: {sexo=='M'?'Masculino':'Feminino'}</Text>
                <Text style={styles.modalText}>Limite: {limite.toFixed(2)}</Text>
                <Text style={styles.modalText}>Estudante: {isEnabled? "Sim" : "Não"}</Text>
            </View>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
             
             <View style={styles.form}>
             <Text style={styles.titulo}>Tela de Cadastro</Text> 
                <View>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                    
                    onChangeText={setNome}
                    value={nome} 
                    style={styles.inputText}
                    />
                    <Text style={styles.label}>Idade:</Text>
                    <TextInput
                    onChangeText={setIdade} 
                    value={idade}
                    keyboardType='numeric'
                    
                    style={styles.inputText} 
                    />
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
                <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.button}>
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
      
    //   paddingBottom:40,
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
        fontWeight:'bold',
        marginBottom:20
        
    },

    form:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:40      
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

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#7345d6',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize:15,
        fontWeight:'bold'
      },

      buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:120
      },
      modalData:{
        width:'100%',
        alignItems:'flex-start'
      }

    
    
});
