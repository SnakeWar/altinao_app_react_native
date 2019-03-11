import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import api from "../services/api";
import Styles from '../constants/Styles';

export default class ArtilhariaScreen extends React.Component {
    static navigationOptions = {
        title: "Tabela"
    };

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
        const response = await api.get('/topscore');

        const { data } = response;

        this.setState({
            docs: data
        });

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
                <ImageBackground source={require('../images/jogador1.jpg')} style={{width: '100%', height: '100%'}}>
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
                </ImageBackground>
            </View>
        );
    }
}

