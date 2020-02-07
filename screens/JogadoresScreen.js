/**
 * Created by Mayrc on 08/03/2019.
 */
import React from "react";
import {FlatList, Text, View} from "react-native";
import Styles from '../constants/Styles';

export default class JogadoresScreen extends React.Component {

constructor(props){
    super(props);
    this.state = {
        docs: [],
    }
};

componentDidMount() {
    this.loadProducts();
}

loadProducts = async () => {
    const { navigation } = this.props;
    const id = navigation.state.params.time.id;
    console.log(id);
    try {
        const response = await fetch('http://172.17.192.161:8000:8000/api/playerslist/' + id)
            .then(function(response) {
                return response.json()
            })
        console.log(response);
        this.setState({
            docs: response
        });

    }catch (error) {
        console.log(error);
    }

};

renderItem = ({ item }) => (
    <View style={Styles.productContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={Styles.item}>
                <Text>{item.jogador}</Text>
            </View>
        </View>
    </View>
)

render(){
    return (
        <View style={Styles.container}>
            <View style={Styles.titleContainer}>
                <View style={Styles.item}>
                    <Text style={Styles.title}>Jogadores</Text>
                </View>
            </View>
            <FlatList
                contentContainerStyle={Styles.list}
                data={this.state.docs}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
            />
        </View>
    );
}
}

JogadoresScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.time.nome
})