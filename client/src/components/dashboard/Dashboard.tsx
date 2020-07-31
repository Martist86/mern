import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import {IAppState, IAuth, IProfile} from "../../reducers";

interface IProps {
  getCurrentProfile: () => void;
  auth: IAuth;
  profile: IProfile;
}

const Dashboard = (props: IProps) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return props.profile.loading && props.profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1 className='navy-text'>Welcome to the DashBoard!</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {props.auth.user && props.auth.user.firstName}
      </p>
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
