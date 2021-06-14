import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// when clicked, the list of events in <EventList> should navigate to /events/:id
class EventList extends React.Component {
  // renderEvents method returns a sorted list of events
  // for the render method to display
  renderEvents() {
    const { events } = this.props;
    events.sort(
      (a, b) => new Date(b.event_date) - new Date(a.event_date),
    );

    return events.map((event) => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>
          {event.event_date}
          {' - '}
          {event.event_type}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <section className="eventList">
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
