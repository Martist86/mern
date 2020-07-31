import React from 'react';
import { connect } from 'react-redux';
import {IAlert, IAppState} from "../../reducers";

interface IProps {
    alerts: IAlert[]
}
const Alert = (props: IProps) =>
  props.alerts && props.alerts.length > 0 ? (
      <>
          {
              props.alerts.map(alert => (
                  <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                      {alert.msg}
                  </div>
              ) )              
          }
      </>
  ) : null;

const mapStateToProps = (state: IAppState) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
