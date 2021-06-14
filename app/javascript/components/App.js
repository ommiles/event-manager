import React from 'react';
import { Route } from 'react-router-dom';
import { Alert } from '../helpers/notifications';
import Editor from './Editor';
import './App.css';

// we have made the :id part of the route optional (due to the question mark)
// we are pointing our root route at /events
// By doing things this way, we will have access to the URL params within the <Editor> component.

const App = () => (
  <div>
    <Route path="/events/:id?" component={Editor} />
    <Alert stack={{ limit: 3 }} />
    {/* <Editor /> */}
  </div>
);

export default App;
