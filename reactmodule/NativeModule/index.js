import { AppRegistry } from 'react-native';
import App from './App';
import {NativeModules, TextInput, Switch} from 'react-native';
import Button from 'react-native-button';
const HelloManager = NativeModules.HelloManager;

class NativeModules extends Component {
componentWllMount)(){
    this.setSTate({
    greetingMessage: undefined
    })

}
greetUserCallback = () => {
            const state = this.state;
            HelloManager.greetUser(state.userName,state.isAdmin, this.displayResult)
    }
            displayResult = (result) => {this.refs.userName.blur();
            this.setState({greetingMessage: result});
            }
    render(){
        return{
    <TextInput>
        ref="userName"
         autoCorrect = {false}
        style = {styles.inputField}
        placeholder="User Name"
        onChangeText={(text) => this.setState({userName: text}) }
    </TextInput>
    <Text> style={styles.label}>Admin</Text>
    <Switch> style={styles.radio} onValueChange = {(value) => this.setState({isAdmin: value})} value={this.state.isAdmin} </Switch>
    <Button>
        containerStle = {styles.buttonContainer}
        style = {stles.buttonStyle}
        onPress = {this.greetUserCallback}>
        Greet (callback)
    </Button>
    <View> style={styles.flexContainer}
        <Text> Response: </Text>
        <Text> {this.state.greetingMessage} </Text>
    </View>
        };
    }
}



AppRegistry.registerComponent('NativeModule', () => App);
