import store from './store'
import { bugAdded, bugRemoved, bugResolved } from './actions'

const unsubscribe = store.subscribe(() => {
  console.log('Current State: ', store.getState())
})

store.dispatch(bugAdded('Bug1'))

// unsubscribe()

store.dispatch(bugResolved(1))

// store.dispatch(bugRemoved(1))
