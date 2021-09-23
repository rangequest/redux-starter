import configureStore from './store/configureStore'
import * as actions from './store/bugs'
import { projectAdded, projectCompleted } from './store/projects'

const store = configureStore()

store.subscribe(() => {
  console.log('Store changed: ', store.getState())
})

store.dispatch(projectAdded({ name: 'Project1' }))
store.dispatch(projectAdded({ name: 'Project2' }))
store.dispatch(projectAdded({ name: 'Project3' }))

store.dispatch(projectCompleted({ id: 1 }))

store.dispatch(actions.bugAdded({ description: 'bug1' }))
store.dispatch(actions.bugAdded({ description: 'bug2' }))
store.dispatch(actions.bugAdded({ description: 'bug3' }))

store.dispatch(actions.bugResolved({ id: 1 }))
