import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Beef = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px
`;


  const Login = ({ errors, touched, status }) => {
     const [login, setLogin] = useState([]);
      useEffect(() => {
     console.log("status has changed", status);
     status && setLogin(login => [...login, status]);
     }, [status]);

  return (
      <div className="All">
        
          <h2>Welcome Back!</h2>
          <Form>
            <Beef>
              {/* <label htmlFor="username">username</label>
              <Field
                  id="username"
                  type="text"
                  placeholder="username"
                  name="username"
              />
                {touched.username && errors.username && <p 
                className="errors">{errors.username}</p>} */}

              <label htmlFor="email"></label>
              <Field 
                className="beef1"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
              />
              {touched.email && errors.email && (
                <p className="errors">{errors.email}</p>
              )}

              <label htmlFor="password"></label>
              <Field
                  className="beef1"
                  id="password"
                  type="text"
                  placeholder="Password"
                  name="password"
              />
              {touched.password && errors.password && <p 
                className="errors">{errors.password}</p>}
 
              </Beef>

              <button type="submit" className="button"> Log in</button>

        <div className="signin">
        <span> Don't have an account?</span> <Link to="/signup">sign up here</Link>  
        </div> 

          </Form>
    
      </div>
  );
}

const FormikLogin = withFormik({

  mapPropsToValues({ username, password, email }){
      return {
          email: email || "",
          // username: username || "",
          password: password || ""
      };
  },
  validationSchema: Yup.object().shape({
      // username: Yup.string().required(),
      password: Yup.string().required(),
      email: Yup.string().required()
  }),
  handleSubmit(values, {setStatus, props}){
      console.log("submitting", values);
      
      axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
          console.dir(res)
          setStatus(res.data)

          localStorage.setItem('token', res.data.token);
          props.history.push('/dashboard');
      })
        .catch(err => {
          console.log(err.response);
        });
  }
})(Login);
export default FormikLogin;