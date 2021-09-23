import configureStore from './store/configureStore'
import * as actions from './store/bugs'

const store = configureStore()

store.subscribe(() => {
  console.log('Store changed: ', store.getState())
})

store.dispatch(actions.bugAdded('bug1'))
store.dispatch(actions.bugAdded('bug2'))
store.dispatch(actions.bugAdded('bug3'))

store.dispatch(actions.bugResolved(1))
