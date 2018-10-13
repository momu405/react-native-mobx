import  React from 'react';

import {
    observer,
    inject,
} from 'mobx-react/native';

import {
    Header,
    TextInput,
    Button,
} from '../../components';

import {
    Container,
} from './styled';

@inject('listStore')
@observer
class AddList extends React.Component {
    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} />
                <TextInput title='ชื่อรายการ' onChangeText={(topic) => {this.props.listStore.changeTopic(topic)}} />
                <TextInput title='จำนวนเงิน' onChangeText={(money) => {this.props.listStore.changeMoney(money)}}/>
                <Button
                    onPress={() => { this.props.listStore.addListItem() }}
                    text={'บันทึก'}
                />
            </Container>
        );
    }
}

export default AddList;
