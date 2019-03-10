import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import JogosScreen from '../screens/JogosScreen';
import TabelaScreen from '../screens/TabelaScreen';
import ArtilhariaScreen from '../screens/ArtilhariaScreen';
import GoalsScreen from '../screens/GoalsScreen';
import TimesScreen from '../screens/TimesScreen';

const JogosStack = createStackNavigator({
  Jogos: JogosScreen,
    Goals: GoalsScreen,
});

JogosStack.navigationOptions = {
  tabBarLabel: 'Jogos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? '' : '-outline'}`
          : 'md-calendar'
      }
    />
  ),
};

const TabelaStack = createStackNavigator({
  Tabela: TabelaScreen,
});

TabelaStack.navigationOptions = {
  tabBarLabel: 'Tabela',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-reorder' : 'md-reorder'}
    />
  ),
};

const ArtilhariaStack = createStackNavigator({
  Artilharia: ArtilhariaScreen,
});

ArtilhariaStack.navigationOptions = {
  tabBarLabel: 'Artilharia',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-football' : 'md-football'}
    />
  ),
};

const TimesStack = createStackNavigator({
    Times: TimesScreen,
});

TimesStack.navigationOptions = {
    tabBarLabel: 'Times',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
        />
    ),
};

export default createBottomTabNavigator({
  JogosStack,
  TabelaStack,
  ArtilhariaStack,
  TimesStack
});
