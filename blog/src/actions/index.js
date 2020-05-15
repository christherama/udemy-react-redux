import jph from "../apis/json-placeholder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jph.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
