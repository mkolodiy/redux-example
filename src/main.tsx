import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Posts } from './routes/posts';
import { Post } from './routes/post';
import { Root, loader as rootLoader } from './routes/root';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux';
import { Provider } from 'react-redux';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/:id',
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
