import React, {  useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import lclzStor from "../../local";
import Input from "../Elements/Input";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      companyName: '',
      companyDescription: '',
      address: '',
      tags: [],
      fopCode: '',
      logo: ''

  });

  const { firstName,lastName, email, password, password2, companyName, companyDescription, tags, fopCode, logo, address } = formData;

 const onChange = (name: string, value: string) => setFormData({ ...formData, [name]: value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert(`${lclzStor.passwordsDoNotMatch}`, 'danger');
    } else {
      register({ firstName, lastName, email, password, companyName, companyDescription, tags, fopCode, logo, address });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <h1 className='navy-text'>{lclzStor.register}</h1>
      <p className='lead'>
        <i className='fas fa-user' /> {lclzStor.makeAccount}
      </p>
      <form className='form card-wrapper' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Input
              placeholder={lclzStor.firstName}
              onChange={onChange}
              name='firstName'
              value={firstName}
          />
        </div>
          <div className='form-group'>
          <Input
              placeholder={lclzStor.lastName}
              onChange={onChange}
              name='lastName'
              value={lastName}              
          />
          </div>
          <div className='form-group'>
              <Input
                  placeholder={lclzStor.companyName}
                  onChange={onChange}
                  name='companyName'
                  value={companyName}
              />
          </div>
          <div className='form-group'>
              <Input
                  placeholder={lclzStor.companyDescription}
                  onChange={onChange}
                  name='companyDescription'
                  value={companyDescription}
              />
          </div>
          <div className='form-group'>
              <Input
                  placeholder={lclzStor.fopCode}
                  onChange={onChange}
                  name='fopCode'
                  value={fopCode}
              />
          </div>
          <div className='form-group'>
              <Input
                  placeholder={lclzStor.logo}
                  onChange={onChange}
                  name='logo'
                  value={logo}
              />
          </div>
          <div className='form-group'>
              <Input
                  placeholder={lclzStor.address}
                  onChange={onChange}
                  name='address'
                  value={address}
              />
          </div>
        <div className='form-group'>
            <Input
                placeholder={lclzStor.email}
                onChange={onChange}
                name='email'
                value={email}
            />
        </div>
        <div className='form-group'>
          <Input             
              onChange={onChange}
              type='password'
              placeholder={lclzStor.password}
              name='password'
              value={password}
          />
        </div>
        <div className='form-group'>
          <Input
              onChange={onChange}
              type='password'
              placeholder={lclzStor.confirmPassword}
              name='password2'
              value={password2}
          />
        </div>
        <div className="d-flex">
            <input type='submit' className='btn btn-primary' value={lclzStor.register} />
            <p>
                Маєш акаунт? <Link to='/login'>{lclzStor.login}</Link>
            </p>              
        </div>       
      </form>      
    </>
  );
};

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
