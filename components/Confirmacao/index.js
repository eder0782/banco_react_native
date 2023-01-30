import React from 'react';
import{View,StyleSheet,Modal,Pressable,Text} from 'react-native';
// import Slider from '@react-native-community/slider';
// import {Picker} from '@react-native-picker/picker';


export default function Confirmacao(props){
    return(
        <View>
            <Modal
        animationType="slide"
        transparent={true}
        visible={props.Visible}
        
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Dados Cadastrais!</Text>
            <View style={styles.modalData}>
                <Text style={styles.modalText}>Nome: {props.nome}</Text>
                <Text style={styles.modalText}>Idade: {props.idade}</Text>
                <Text style={styles.modalText}>Sexo: {props.sexo=='M'?'Masculino':'Feminino'}</Text>
                <Text style={styles.modalText}>Limite: {props.limite.toFixed(2)}</Text>
                <Text style={styles.modalText}>Estudante: {props.isEnabled? "Sim" : "Não"}</Text>
            </View>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={() => props.setVisible(!props.Visible)}
              >
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            
        </View>
    )
}


const styles = StyleSheet.create({
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



})