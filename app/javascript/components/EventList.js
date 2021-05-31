import React from 'react';
import PropTypes from 'prop-types';

class EventList extends React.Component {
  // renderEvents method returns a sorted list of events
  // for the render method to display
  renderEvents() {
    const { events } = this.props;
    events.sort((a, b) => new Date(b.event_date) - new Date(a.event_date));

    return events.map((event) => (
      <li key={event.id}>
        {event.event_date}
        {' - '}
        {event.event_type}
      </li>
    ));
  }

  render() {
    return (
      <section>
        <h2>Events</h2>
        <ul>{this.renderEvents()}</ul>
      </section>
    );
  }
}

// we have also implemented some simple prop validation
// to ensure that the component is passed an array
EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

EventList.defaultProps = {
  events: [],
};

export default EventList;
