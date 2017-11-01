import { GET_ALL_TRANSACTION } from 'actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_TRANSACTION:
      return action.payload
  }
  return state
}
