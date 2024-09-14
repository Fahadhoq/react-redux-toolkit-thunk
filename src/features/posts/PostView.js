import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>React Redux-axioss-thunk-toolkit Example</h1>
      <h2>Posts View</h2>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <h4>{post.id}</h4>
                <p>{post.title}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};
export default PostView;