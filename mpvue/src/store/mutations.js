import {RECEIVE_LIST} from './mutation-type'

export default {
  [RECEIVE_LIST] (state, {listData}) {
    state.listTmp = listData
    console.log(state)
  }
}
