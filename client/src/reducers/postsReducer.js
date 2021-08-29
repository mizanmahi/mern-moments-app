import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from '../constants/actionType';

const postReducer = (posts = [], { type, payload }) => {
  switch (type) {
    case DELETE:
      return posts.filter((post) => post._id !== payload);
    case UPDATE:
    case LIKE:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case FETCH_ALL:
      return payload;
    case CREATE:
      return [...posts, payload];

    default:
      return posts;
  }
};

export default postReducer;
