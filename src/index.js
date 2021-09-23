import store from './store'

const unsubscribe = store.subscribe(() => {
  console.log('Current State: ', store.getState())
})

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'This is a new bug.',
  },
})

unsubscribe()

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
})
