/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import AlbumCard from '../../Components/AlbumCard/AlumCard';
import styles from '../Profile Viewer/ProfileViewer.module.scss';
import { Actions } from '../../store/actions/profileClass';

class ProfileClass extends Component {
  constructor() {
    super();
    this.state = {
      second: 0,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
    // this.props.Profile();
    this.tick();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.second !== this.state.second) {
      setTimeout(this.tick, 1000);
    }
  }

  tick() {
    this.setState(prevState => ({
      second: prevState.second + 1,
    }));
  }

  render() {
    const { Profile } = this.props;
    return (
      <div>
        {' '}
        Total time on page = {this.state.second} seconds
        <div>{moment().format('MMMM Do YYYY,hh:mm:ss')}</div>
        <div className={styles.flex}>
          {Profile.data.map((item, i) => (
            <AlbumCard CardInfo={item} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Profile: state.ProfileClass,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(Actions.fetching()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileClass);
