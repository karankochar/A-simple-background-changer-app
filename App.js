import React ,{Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      randomColor : null
    }
  }
  getRandomColor = () => {
    return(
      'rgb('+
      Math.floor((Math.random()*256))+
      ','+
      Math.floor((Math.random()*256))+
      ','+
      Math.floor((Math.random()*256))+
      ')'
    );
  }
  buttonPressed = () =>{
    this.setState({randomColor:this.getRandomColor()})
  }
  render(){
  return (
    <View style={[styles.container, {backgroundColor : this.state.randomColor}]}>
      <TouchableOpacity onPress={this.buttonPressed}>
      <Text style={styles.text}>Press me !</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    backgroundColor:'#0ABDE3',
    fontSize:30,
    color:'white',
    paddingVertical:12,
    paddingHorizontal:20,
    borderRadius:5,
    borderColor:'white',
    borderWidth:1
  }
});
