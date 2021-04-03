
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';


function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
