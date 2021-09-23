import configureStore from './store/configureStore'
import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs'
import { projectAdded, projectCompleted } from './store/projects'

const store = configureStore()

store.subscribe(() => {
  console.log('Store changed: ', store.getState())
})

store.dispatch(projectAdded({ name: 'Project1' }))
store.dispatch(projectAdded({ name: 'Project2' }))
store.dispatch(projectAdded({ name: 'Project3' }))

store.dispatch(projectCompleted({ id: 1 }))

store.dispatch(bugAdded({ description: 'bug1' }))
store.dispatch(bugAdded({ description: 'bug2' }))
store.dispatch(bugAdded({ description: 'bug3' }))

store.dispatch(bugResolved({ id: 1 }))

console.log(getUnresolvedBugs(store.getState()))
