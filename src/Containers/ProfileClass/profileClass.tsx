/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { Dispatch } from 'redux';
import moment from 'moment';
import AlbumCard from '../../Components/AlbumCard/AlumCard';
import styles from '../Profile Viewer/ProfileViewer.module.scss';
import { Actions } from '../../store/actions/profileClass';
import { IProfileClassState }from '../../store/reducers/profileClass';
import { IReducersState} from '../../store/reducers/rootReducer'

interface IProps {
  fetchData:()=>void,
  Profile: IProfileClassState
}

interface IState {
  second: number
}

class ProfileClass extends Component<IProps,IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      second: 0,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
    this.tick();
  }

  componentDidUpdate(prevProps:null, prevState: { second: number; }) {
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
          {Profile.data.map((item: any, i: string | number) => (
            <AlbumCard CardInfo={item} key={i} />
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state: IReducersState) => ({
  Profile: state.ProfileClass,
});

const mapDispatchToProps: MapDispatchToPropsParam<any, {}> = (dispatch: Dispatch<any>) => ({
  fetchData: () => dispatch(Actions.fetching()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileClass);
