import _ from "lodash";
import jph from "../apis/json-placeholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log("about to fetch posts");
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jph.getPosts();

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jph.getUser(id);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
