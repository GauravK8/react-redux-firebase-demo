
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)
const loadUserStateSuccess = () => ({ type: 'LOAD_USERSTATE_SUCCESS' })
const saveUserStateSuccess = () => ({ type: 'SAVE_USERSTATE_SUCCESS' })
const updateUserStateSuccess = () => ({ type: 'UPDATE_USERSTATE_SUCCESS' })
const loadUserStateFailure = () => ({type: 'LOAD_USERSTATE_FAILURE'})
const saveUserStateFailure = () => ({type: 'SAVE_USERSTATE_FAILURE'})
const updateUserStateFailure = () => ({type: 'UPDATE_USERSTATE_FAILURE'})


it('should dispatch action', () => {

  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(loadUserStateSuccess())
  const actions = store.getActions()
  const expectedPayload = { type: 'LOAD_USERSTATE_SUCCESS' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch action', () => {

  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(saveUserStateSuccess())
  const actions = store.getActions()
  const expectedPayload = { type: 'SAVE_USERSTATE_SUCCESS' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch action', () => {

  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(updateUserStateSuccess())
  const actions = store.getActions()
  const expectedPayload = { type: 'UPDATE_USERSTATE_SUCCESS' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch action', () => {
  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(loadUserStateFailure())
  const actions = store.getActions()
  const expectedPayload = { type: 'LOAD_USERSTATE_FAILURE' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch action', () => {
  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(saveUserStateFailure())
  const actions = store.getActions()
  const expectedPayload = { type: 'SAVE_USERSTATE_FAILURE' }
  expect(actions).toEqual([expectedPayload])
})

it('should dispatch action', () => {
  const initialState = {}
  const store = mockStore(initialState)
  store.dispatch(updateUserStateFailure())
  const actions = store.getActions()
  const expectedPayload = { type: 'UPDATE_USERSTATE_FAILURE' }
  expect(actions).toEqual([expectedPayload])
})