import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import {Provider} from 'mobx-react';
import AuthStore from './stores/AuthStore';
import IndexStore from "./stores/IndexStore";

import * as serviceWorker from './serviceWorker';
import PostStore from "./stores/PostStore";
import CommentStore from "./stores/CommentStore";
import CategoryStore from "./stores/CategoryStore";
import UploadStore from "./stores/UploadStore";


const stores = {
    authStore: new AuthStore(),
    indexStore: new IndexStore(),
    postStore:new PostStore(),
    commentStore:new CommentStore(),
    categoryStore:new CategoryStore(),
    uploadStore:new UploadStore(),
}

axios.defaults.baseURL=process.env.REACT_APP_API_URL;

ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
