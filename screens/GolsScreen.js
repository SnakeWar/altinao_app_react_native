/**
 * Created by Mayrc on 08/03/2019.
 */
import React from "react";
import {FlatList, Text, View} from "react-native";
import Styles from '../constants/Styles';

export default class GolsScreen extends React.Component {

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
    const id = navigation.state.params.jogo.id_jogo;
    console.log(id);
    try {
        const response = await fetch('http://192.168.100.116:8000/api/infogoals/' + id)
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
                <Text>{item.nome}</Text>
            </View>
            <View style={Styles.item}>
                <Text>{item.gols}</Text>
            </View>
        </View>
    </View>
)

render(){
    return (
        <View style={Styles.container}>
            <View style={Styles.titleContainer}>
                <View style={Styles.item}>
                    <Text style={Styles.title}>Jogador</Text>
                </View>
                <View style={Styles.item}>
                    <Text style={Styles.title}>Gols</Text>
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

GolsScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.jogo.sigla_casa +
    " " + navigation.state.params.jogo.placar_casa +
    " x " + navigation.state.params.jogo.placar_visitante +
    " " + navigation.state.params.jogo.sigla_visitante})