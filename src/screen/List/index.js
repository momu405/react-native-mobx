import React from 'react';

import {
    observer,
    inject,
} from 'mobx-react/native';
import { ListView } from 'react-native';
import { Container } from './styled';
import { Header, Card } from '../../components';

@inject('listStore')
@observer
class List extends React.Component {
    render() {
        console.log(this.props.listStore)
        return (
            <Container>
                <Header navigation={this.props.navigation} />
                <ListView
                    dataSource={this.props.listStore.dataSource}
                    renderRow={row => <Card topic={row.topic} money={row.money} />}
                    enableEmptySections
                />
            </Container>
        );
    }
}

export default List;
