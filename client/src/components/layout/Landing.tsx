import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {IAppState} from "../../reducers";

interface IProps {
  isAuthenticated: boolean
}
const Landing = (props: IProps) => {
  return (
      <section className='landing'>
          <div className='dark-overlay'>
              <div className='landing-inner'>
                  <h1 className='x-large'>chat.app</h1>
                  <div className='buttons'>
                      <Link to='/register' className='btn btn-primary'>
                          Реєстрація
                      </Link>
                      <Link to='/login' className='btn btn-light'>
                          Вхід
                      </Link>
                  </div>
              </div>
          </div>
      </section>
  );
};

const mapStateToProps = (state: IAppState) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
