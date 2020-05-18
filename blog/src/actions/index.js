import _ from "lodash";
import jph from "../apis/json-placeholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jph.getPosts();

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jph.getUser(id);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
