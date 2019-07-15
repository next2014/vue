import {RECEIVE_LIST, MOVIES_ARR} from './mutation-type'
import listData from '../datas/list-data'
export default {
  getList ({commit}) {
    console.log('action')
    commit(RECEIVE_LIST, listData)
  },
  getMoviesArr ({commit}, data) {
    commit(MOVIES_ARR, data)
  }
}
