import store from './store'
import * as actions from './actions'

store.subscribe(() => {
  console.log('Store changed: ', store.getState())
})

store.dispatch(actions.bugAdded('bug1'))
store.dispatch(actions.bugAdded('bug2'))
store.dispatch(actions.bugAdded('bug3'))

store.dispatch(actions.bugResolved(1))
