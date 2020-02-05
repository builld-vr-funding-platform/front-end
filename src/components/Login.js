import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosWithAuth from '../utils/axiosWithAuth';

  const Login = ({ errors, touched, status }) => {
    // const [login, setLogin] = useState([]);
    // useEffect(() => {
    //   console.log("status has changed", status);
    //   status && setLogin(login => [...login, status]);
    // }, [status]);

  return (
      <div>
          <h2>Welcome Back!</h2>
          <Form>
              {/* <label htmlFor="username">username</label>
              <Field
                  id="username"
                  type="text"
                  placeholder="username"
                  name="username"
              />
                {touched.username && errors.username && <p 
                className="errors">{errors.username}</p>} */}

              <label htmlFor="email">email</label>
              <Field 
                id="email"
                type="text"
                placeholder="email"
                name="email"
              />
              {touched.email && errors.email && (
                <p className="errors">{errors.email}</p>
              )}

              <label htmlFor="password">password</label>
              <Field
                  id="password"
                  type="text"
                  placeholder="password"
                  name="password"
              />
              {touched.password && errors.password && <p 
                className="errors">{errors.password}</p>}
              <button type="submit">Login</button>
              
          </Form>
    
      </div>
  );
}

const FormikLogin = withFormik({

  mapPropsToValues({ username, password, email }){
      return {
          // username: username || "",
          password: password || "",
          email: email || ""
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

          localStorage.setItem('token', res.data.message);
          props.history.push('/dashboard');
      })
        .catch(err => {
          console.log(err.response);
        });
  }
})(Login);
export default FormikLogin;