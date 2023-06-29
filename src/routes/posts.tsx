import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchPosts } from '../redux/actions';
import { type ReduxState } from '../redux/reducers';

export function Posts() {
  const dispatch = useDispatch();
  const postsLoading = useSelector((state: ReduxState) => state.postsLoading);
  const posts = useSelector((state: ReduxState) => state.posts);

  useEffect(() => {
    dispatch(actionFetchPosts());
  }, []);

  if (postsLoading) {
    <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
