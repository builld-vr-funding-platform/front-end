import React from "react";
import { withFormik, Form, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';

const Beef = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px
`;

// const DOB = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const CheckBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 30px;
//   margin-left: 30px;
// `;



const Signup = ({values, errors, touched, status}) => {

  // const [user, setUser] = useState([]); 

  // useEffect(() => {
  //   status && setUser(user => [...user, status]);
  // }, [status]);

  return (
    <div className="All">
          <Form>
        <Beef>
          <div>
              <Field className="beef1" type="text" name="email" placeholder="Email" />
              {touched.email && errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <Field className="beef2" type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>

          {/* <div>
            <Field className="beef3" type="password" name="ConfirmPassword" placeholder="ConfirmPassword" />
            {touched.ConfirmPassword && errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
          </div> */}

          <div>
            <Field className="beef4" type="text" name="username" placeholder="Pick a username!" />
            {touched.username && errors.username && <p>{errors.username}</p>}
          </div>
        </Beef>

        {/* <span>Date of birth</span>
        <DOB>
          <Field className="DOB1" as="select" name="Month">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </Field>

            <Field className="DOB2" type="text" name="Day" placeholder="Day" />
            <Field className="DOB3" type="text" name="Year" placeholder="Year" />
          
        </DOB>

        <CheckBox>
          <Field className="check" type="checkbox" name="male" check="values.Male" />{"Male"}
          
          <Field className="check" type="checkbox" name="Female" check="values.Female" />{"Female"}
          
          <Field
          className="check"
            type="checkbox"
            name="Non-binary"
            check="values.Non-binary"
          />{"Non-binary"}
          
        </CheckBox> */}

        <button type="submit" className="button">SIGN UP</button>

        <div className="signin">
        <span>Already have an account?</span> <Link to="/login">sign in here</Link>  
        </div> 
        </Form>
    </div>
  );
};                                                      //^^^ ADD THE LINK RIGHT THERE

const SignUpForm = withFormik({
  mapPropsToValues({ email, password, ConfirmPassword, username, Month, Day, Year}) {
    return {
      email: email || "",
      password: password || "",
      // ConfirmPassword: ConfirmPassword || "",
      username: username || "",
      // Month: Month || "",
      // Day: Day || "",
      // Year: Year || ""
    };
  },

  validationSchema: yup.object({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
    // ConfirmPassword: yup.string()
    // .oneOf([yup.ref('Password'), null], 'Passwords must match')
    // .required('Please confirm your password'),
    username: yup.string().required('Please enter a username'),

    
  }),
  handleSubmit(values, { setStatus, resetForm, props }) {    
    console.log("HERE IS YOUR DATA :)", values);

    axiosWithAuth()
      .post('/auth/register', values)
      .then(res => {
        console.dir(res);
        setStatus(res.data);

        localStorage.setItem('token', res.data);
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log(err.response)
      });

      resetForm(values)
  }
})(Signup);

export default SignUpForm;