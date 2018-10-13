import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import CustomDrawerContentComponent from './CustomDrawerContentComponent';
import {
  Home,
  List,
  AddList,
} from '../screen';

export default createDrawerNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
        title: 'หน้าหลัก'
    }
  },
  ListScreen: {
    screen: List,
    navigationOptions: {
        title: 'รายการ'
    }
  },
  AddListScreen: {
    screen: AddList,
    navigationOptions: {
        title: 'เพิ่มรายการ'
    }
  },
}, {
  drawerPosition: 'left',
  initialRouteName: 'HomeScreen',
  drawerWidth: parseInt(Dimensions.get('window').width * 0.7, 10),
  contentComponent: CustomDrawerContentComponent,
});
