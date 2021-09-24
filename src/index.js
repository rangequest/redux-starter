import configureStore from './store/configureStore'
import { getUnresolvedBugs, addBug, resolveBug, assignBugToUser } from './store/bugs'
import { projectAdded, projectCompleted } from './store/projects'
import { userAdded } from './store/users'

const store = configureStore()

store.dispatch(userAdded({ name: 'new User' }))

store.dispatch(addBug({ description: 'new Bug' }))

setTimeout(() => {
  const unResolvedBugs = getUnresolvedBugs(store.getState())
  const uRId = unResolvedBugs[0].id
  console.log('Unresolved Bug Id', uRId)

  store.dispatch(assignBugToUser(uRId, 4))

  setTimeout(() => store.dispatch(resolveBug(uRId)), 100)
}, 100)

// store.dispatch(addBug({ description: 'a' }))

// store.dispatch(loadBugs())

// setTimeout(() => store.dispatch(loadBugs()), 2000)

// store.dispatch(
//   actions.apiCallBegan({
//     url: '/bugs',
//     onSuccess: 'bugs/bugsReceived',
//   })
// )

// store.subscribe(() => {
//   console.log('Store changed: ', store.getState())
// })

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] })
// })

// store.dispatch({ type: 'error', payload: { message: 'An error occured' } })

// store.dispatch(projectAdded({ name: 'Project1' }))
// store.dispatch(projectAdded({ name: 'Project1' }))
// store.dispatch(projectAdded({ name: 'Project2' }))
// store.dispatch(projectAdded({ name: 'Project3' }))

// store.dispatch(projectCompleted({ id: 1 }))

// store.dispatch(bugAdded({ description: 'bug1' }))
// store.dispatch(bugAdded({ description: 'bug2' }))
// store.dispatch(bugAdded({ description: 'bug3' }))

// store.dispatch(bugResolved({ id: 1 }))

// console.log(getUnresolvedBugs(store.getState()))
