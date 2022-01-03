export function postsReducer(
  state={ 
    all: [], 
    isFetching: false, 
    isError: false ,
    errorMessage: null
  },
  action
  ) {
  switch (action.type) {
    case "POSTS_FETCH_REQUEST":
      return {
        ...state,
        isFetching: true
      }
    case "POSTS_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        all: action.payload
      }
    case "POSTS_FETCH_FAILURE":
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

// Selectors
export const getAllPosts = state => state.posts.all
export const getIsFetchingPosts = state => state.posts.isFetching
export const getIsErrorPosts = state => state.posts.isError