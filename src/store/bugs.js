import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from './api'
import moment from 'moment'

let lastId = 0

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false
    },
    bugsReceived: (bugs, action) => {
      bugs.loading = false
      bugs.list.push(...action.payload)
      bugs.lastFetch = Date.now()
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload)
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
      bugs.list[index].resolved = true
    },
  },
})

export default slice.reducer
export const { bugAdded, bugResolved, bugAssignedToUser, bugsReceived, bugsRequested, bugsRequestFailed } = slice.actions

const url = '/bugs'

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs

  const diffInMinutes = moment().diff(moment(lastFetch), 'minute')
  if (diffInMinutes < 10) return

  dispatch(
    apiCallBegan({
      url,
      onFailure: bugsRequestFailed.type,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
    })
  )
}

export const addBug = bug =>
  apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type,
  })

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
)
