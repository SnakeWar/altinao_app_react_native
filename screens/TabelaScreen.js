import React from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
import api from "../services/api";
import Styles from '../constants/Styles';

export default class TabelaScreen extends React.Component {
    static navigationOptions = {
        title: "Tabela",
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
        const response = await api.get('/table');

        const { data } = response;

        this.setState({
            docs: data
        });

    };

    renderItem = ({ item }) => (
        <View style={Styles.productContainer}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={Styles.item}>
                <Text>{item.sigla}</Text>
            </View>
              <View style={Styles.item}>
                  <Text>{item.vitorias}</Text>
              </View>
              <View style={Styles.item}>
                  <Text>{item.gols_pro}</Text>
              </View>
              <View style={Styles.item}>
                  <Text>{item.gols_con}</Text>
              </View>
              <View style={Styles.item}>
                  <Text>{item.saldo}</Text>
              </View>
              <View style={Styles.item}>
                  <Text>{item.pontos}</Text>
              </View>
          </View>
        </View>
    )


    render(){
        return (
            <View style={Styles.container}>
                <ImageBackground source={require('../images/bg3.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={Styles.titleContainer}>
                    <View style={Styles.item}>
                        <Text style={Styles.title}>Time</Text>
                    </View>
                    <View style={Styles.item}>
                        <Text style={Styles.title}>Vit</Text>
                    </View>
                    <View style={Styles.item}>
                        <Text style={Styles.title}>Pro</Text>
                    </View>
                    <View style={Styles.item}>
                        <Text style={Styles.title}>Con</Text>
                    </View>
                    <View style={Styles.item}>
                        <Text style={Styles.title}>Saldo</Text>
                    </View>
                    <View style={Styles.item}>
                        <Text style={Styles.title}>Pontos</Text>
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
