import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios"

const Beef = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px
`;

const DOB = styled.div`
  display: flex;
  flex-direction: row;
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 30px;
`;



const Signup = ({values, errors, touched, status}) => {

  const [user, setUser] = useState([]); 

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

 


  return (
    <div className="All">
          <Form>
        <Beef>
          <div>
              <Field className="beef1" type="text" name="Email" placeholder="Email" />
              {touched.Email && errors.Email && <p>{errors.Email}</p>}
          </div>

          <div>
            <Field className="beef2" type="password" name="Password" placeholder="Password" />
            {touched.Password && errors.Password && <p>{errors.Password}</p>}
          </div>

          <div>
            <Field className="beef3" type="password" name="ConfirmPassword" placeholder="ConfirmPassword" />
            {touched.ConfirmPassword && errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
          </div>

          <div>
            <Field className="beef4" type="text" name="Username" placeholder="Pick a username!" />
            {touched.Username && errors.Username && <p>{errors.Username}</p>}
          </div>
        </Beef>

        <span>Date of birth</span>
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
          <Field type="checkbox" name="male" check="values.Male" />{"Male"}
          
          <Field className="check" type="checkbox" name="Female" check="values.Female" />{"Female"}
          
          <Field
          className="check"
            type="checkbox"
            name="Non-binary"
            check="values.Non-binary"
          />{"Non-binary"}
          
        </CheckBox>

        <button type="submit" className="button">SIGN UP</button>
        
        </Form>
    </div>
  );
};

const SignUpForm = withFormik({
  mapPropsToValues({ Email, Password, ConfirmPassword, Username, Month, Day, Year}) {
    return {
      Email: Email || "",
      Password: Password || "",
      ConfirmPassword: ConfirmPassword || "",
      Username: Username || "",
      Month: Month || "",
      Day: Day || "",
      Year: Year || ""
    };
  },

  validationSchema: yup.object({
    Email: yup.string().required('Please enter your email'),
    Password: yup.string().required('Please enter your password'),
    ConfirmPassword: yup.string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match')
    .required('Please confirm your password'),
    Username: yup.string().required('Please enter a username'),

    
  }),
  handleSubmit(values, { setStatus, resetForm }) {    
    console.log("HERE IS YOUR DATA :)", values);

      resetForm(values)
   
   
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(Signup);

export default SignUpForm;
