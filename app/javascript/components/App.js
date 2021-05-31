import React from 'react';
import { Route } from 'react-router-dom';
import Editor from './Editor';

// we have made the :id part of the route optional (due to the question mark)
// we are pointing our root route at /events
// By doing things this way, we will have access to the URL params within the <Editor> component.

const App = () => (
  <div>
    <Route path="/events/:id?" component={Editor} />
    <Editor />
  </div>
);

export default App;
