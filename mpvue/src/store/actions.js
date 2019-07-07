import {RECEIVE_LIST} from './mutation-type'
import listData from '../datas/list-data'
export default {
  getList ({commit}) {
    console.log('action')
    commit(RECEIVE_LIST, listData)
  }
}
