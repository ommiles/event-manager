import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// when clicked, the list of events in <EventList> should navigate to /events/:id
class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.searchInput = React.createRef();
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm() {
    this.setState({ searchTerm: this.searchInput.current.value });
  }

  matchSearchTerm(obj) {
    const {
      id, published, created_at, updated_at, ...rest
    } = obj;
    const { searchTerm } = this.state;

    return Object.values(rest).some(
      value => value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
    );
  }

  // renderEvents method returns a sorted list of events
  // for the render method to display
  renderEvents() {
    const { activeId, events } = this.props;
    const filteredEvents = events
      .filter((el) => this.matchSearchTerm(el))
      .sort((a, b) => new Date(b.event_date) - new Date(a.event_date));

    return filteredEvents.map((event) => (
      <li key={event.id}>
        <Link
          to={`/events/${event.id}`}
          className={activeId === event.id ? 'active' : ''}
        >
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
        <h2>
          Events
          <Link to="/events/new">New Event</Link>
        </h2>
        <input
          className="search"
          placeholder="Search"
          type="text"
          ref={this.searchInput}
          onKeyUp={this.updateSearchTerm}
        />
        <ul>{this.renderEvents()}</ul>
      </section>
    );
  }
}

// we have also implemented some simple prop validation
// to ensure that the component is passed an array
EventList.propTypes = {
  activeId: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.object),
};

EventList.defaultProps = {
  activeId: undefined,
  events: [],
};

export default EventList;
