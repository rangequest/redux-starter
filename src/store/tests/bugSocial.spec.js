import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { addBug } from '../bugs'
import configureStore from '../configureStore'

describe('bugsSliceSocial', () => {
  let fakeAxios
  let store

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios)
    store = configureStore()
  })

  const bugsSlice = () => store.getState().entities.bugs

  it('should add the bug to the store if it saved in the database', async () => {
    // Arrange
    const bug = { description: 'a' }
    const savedBug = { ...bug, id: 1 }
    fakeAxios.onPost('/bugs').reply(200, savedBug)

    // Act
    await store.dispatch(addBug(bug))

    // Assert
    console.log('Bug List: ', store.getState().entities.bugs.list)
    expect(bugsSlice().list).toContainEqual(savedBug)
  })

  it("should not add the bug to the store if it's not saved in the database", async () => {
    // Arrange
    const bug = { description: 'a' }
    fakeAxios.onPost('/bugs').reply(500)

    // Act
    await store.dispatch(addBug(bug))

    // Assert
    console.log('Bug List: ', store.getState().entities.bugs.list)
    expect(bugsSlice().list).toHaveLength(0)
  })
})
