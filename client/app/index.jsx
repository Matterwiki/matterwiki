import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Login from './components/login';
import Article from './components/article';
import NewArticle from './components/new';
import EditArticle from './components/edit';
import ArticleHistory from './components/history';
import Admin from './components/admin';
import Setup from './components/setup';
import EditTopic from './components/edit_topics';
import EditUser from './components/edit_users';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="home" component={Home}/>
      <Route path="login" component={Login}/>
        <Route path="article/new" component={NewArticle}/>
        <Route path="article/edit/:articleId" component={EditArticle}/>
      <Route path="article/history/:articleId" component={ArticleHistory}/>
      <Route path="article/:articleId" component={Article}/>
      <Route path="admin" component={Admin}/>
      <Route path="topic/edit/:topicId" component={EditTopic}/>
      <Route path="user/edit/:userId" component={EditUser}/>
      <Route path="setup" component={Setup}/>
    </Route>
  </Router>
, document.getElementById('app'));
