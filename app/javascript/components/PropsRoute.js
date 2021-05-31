// Out of the box, React Router doesn’t offer an easy way to pass props to a route...
// ... so we’ll left to write this ourselves.
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Route {...rest} render={(routeProps) => renderMergedProps(component, routeProps, rest)} />
);

PropsRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PropsRoute;
