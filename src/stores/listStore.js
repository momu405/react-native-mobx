import { observable, action, computed, toJS } from 'mobx';
import { ListView } from 'react-native';

class ObservableListStore {
  @observable list = [];
  @observable topic = '';
  @observable money = '';

  @action addListItem() {
    this.list.push({
        topic: this.topic,
        money: this.money,
    });
  }

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  @computed get dataSource() {
    return this.ds.cloneWithRows(toJS(this.list));
  }

  @action removeListItem(item) {
    this.list = this.list.filter(l => l.index !== item.index);
  }

  @action changeMoney(money) {
    this.money = money;
  }

  @action changeTopic(topic) {
    this.topic = topic;
  }

  @computed get datas () {
    const datas = toJS(this.list)
    return datas;
}
}

export default ObservableListStore;
