import {RECEIVE_LIST} from './mutation-type'
import listData from '../datas/list-data'
export default {
  getList ({commit}) {
    commit(RECEIVE_LIST, listData)
  }
}
