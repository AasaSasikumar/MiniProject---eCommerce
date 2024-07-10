// import React from "react";
// import "./Signup.css";
// import {toast} from 'react-toastify'
// // import signupImage from "../../../Assets/Images/signup.jpg";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { signup } from "../../../Services/Userapi";


// function Signup() {
//   const navigate = useNavigate();

//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };


//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters long")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

  
// const onSubmit = async (values) => {
//   try {
//     const { data } = await signup(values);
//     navigate('/login');

//     if (data.status) {
//     localStorage.setItem("jwt", data?.token);
//       toast.success(data.message, { position: "top-center" });
//     } else {
//       toast.error(data.message, { position: "top-center" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

 
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });


 

//   return (
//     <>
//       <div className="signupUser">
//         <h1 className="signuph1">SHOPSEE</h1>
//         <div className="signup">
//           <div className="signupSection">
//             <form onSubmit={formik.handleSubmit}>
//               <h1>Create your Account</h1>
//               <p>Please enter your details.</p>
//               <div className="signupUserInput">
//                 <div className="signupUsername">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="signupName"
//                     className="signupInput"
//                     placeholder="Enter your name"
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.name && formik.errors.name && (
//                     <p
//                       className="error-message"
//                       style={{ marginTop: "5px", color: "red" }}
//                     >
//                       {formik.errors.name}
//                     </p>
//                   )}
//                 </div>
//                 <br />
//                 <div className="signupEmail">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="signupEmail"
//                     className="signupInput"
//                     placeholder="Enter your email address"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.email && formik.errors.email && (
//                     <p
//                       className="error-message"
//                       style={{ marginTop: "5px", color: "red" }}
//                     >
//                       {formik.errors.email}
//                     </p>
//                   )}
//                 </div>
//                 <br />
//                 <div className="signupPassword">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="signupPassword"
//                     className="signupInput"
//                     placeholder="Enter password"
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.password && formik.errors.password && (
//                     <p
//                       className="error-message"
//                       style={{ marginTop: "5px", color: "red" }}
//                     >
//                       {formik.errors.password}
//                     </p>
//                   )}
//                 </div>
//                 <br />
//                 <div className="signupPassword">
//                   <label htmlFor="confirmPassword">Confirm Password</label>
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     id="confirmPassword"
//                     className="signupInput"
//                     placeholder="Confirm your password"
//                     value={formik.values.confirmPassword}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.confirmPassword &&
//                     formik.errors.confirmPassword && (
//                       <p
//                         className="error-message"
//                         style={{ marginTop: "5px", color: "red" }}
//                       >
//                         {formik.errors.confirmPassword}
//                       </p>
//                     )}
//                 </div>
//                 <br />
//                 <div className="signupSubmit">
//                   <button type="submit">Sign Up</button>
//                 </div>
//                 <br />
//                 <div className="signupOr">
//                   <p>or</p>
//                 </div>
//                 <br />
//                 <div className="signupLoginAccount">
//                   <button type="button" >Go to Login</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="signupImageSection">
//             {/* <img src={signupImage} alt="" className="signupImage" /> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//  export default Signup;

import React from "react";
import "./Signup.css";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signup } from "../../../Services/Userapi";

function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await signup(values);
      navigate('/login');

      if (data.status) {
        localStorage.setItem("jwt", data?.token);
        toast.success(data.message, { position: "top-center" });
      } else {
        toast.error(data.message, { position: "top-center" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="signupUser">
        <h1 className="signuph1">SHOPSEE</h1>
        <div className="signup">
          <div className="signupSection">
            <form onSubmit={formik.handleSubmit}>
              <h1>Create your Account</h1>
              <p>Please enter your details.</p>
              <div className="signupUserInput">
                <div className="signupUsername">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="signupName"
                    className="signupInput"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="error-message">{formik.errors.name}</p>
                  )}
                </div>
                <br />
                <div className="signupEmail">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="signupEmail"
                    className="signupInput"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="error-message">{formik.errors.email}</p>
                  )}
                </div>
                <br />
                <div className="signupPassword">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="signupPassword"
                    className="signupInput"
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="error-message">{formik.errors.password}</p>
                  )}
                </div>
                <br />
                <div className="signupPassword">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="signupInput"
                    placeholder="Confirm your password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p className="error-message">{formik.errors.confirmPassword}</p>
                    )}
                </div>
                <br />
                <div className="signupSubmit">
                  <button type="submit">Sign Up</button>
                </div>
                <br />
                <div className="signupOr">
                  <p>or</p>
                 </div>
                 <br />
                <div className="signupLoginAccount">
                  <button type="button" onClick={goToLogin}>Go to Login</button>
                </div>
               </div>
             </form>
         </div>
         {/* <div className="signupImageSection">
             <img src={signupImage} alt="" className="signupImage" />
           </div> */}
         </div>
       </div>
     </>
   );
 }

 export default Signup;
 






// import React from 'react'
// import './Signup.css'
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import { Link } from 'react-router-dom';
// import { signup } from '../../../Services/Userapi';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const navigate = useNavigate();

    
//        const initialValues = {
//         username:'',
//         email:'',
//         phone:'',
//         password:'',
//         confirmPassword:'',
//     };
// const validationSchema = Yup.object().shape({
//   username: Yup.string()
//     .required('Name is required')
//     .min(4, 'Username must be at least 4 characters')
//     .max(15, 'Username cannot be more than 15 characters'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
    
//   phone: Yup.string()
//     .required('Phone number is required')
//     .matches(/^\d{10,11}$/, 'Enter a valid phone number'),
//    password: Yup.string()
//     .required('password is required')
//     // .matches(
//     //   /^(?=.[!@#$%^&(),.?":{}|<>])(?=.[0-9].[0-9].[0-9].[0-9])/,
//      .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    
//        'password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
//      ),
//     // .min(8, 'password must be at least 8 characters'),
//   confirmPassword: Yup.string().oneOf(
//     [Yup.ref('password'), null],
//     'passwords must match'
//   )
//   .required('Confirm Password is required'),
// });

//    const onSubmit = async  (values) => {
//     console.log(values);
//     const { data } = await signup(values);
        
//         navigate("/login");
//     }
//     const formik = useFormik({
//       initialValues,
//       validationSchema,
//       onSubmit,
//     });
  
  
//   return (
//     <div>
//       <div className='logimage'>
//         <div className='login-page'>
//           <div className='login'>
//             <div className='userform'>
//               <form onSubmit={formik.handleSubmit}>
//                 <div className='login-header'>
//                   <h1>SignUp</h1><br />
//                 </div>

//                 <label></label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="signupName"
//                   value={formik.values.username}
//                   placeholder="Enter your name"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.username && formik.errors.username && (
//                   <div className="error-message">{formik.errors.username}</div>
//                 )}

//                 <label></label>
//                 <input
//                   type="text"
//                   name="phone"
//                   id="signupPhone"
//                   value={formik.values.phone}
//                   placeholder="Enter your phone number"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.phone && formik.errors.phone && (
//                   <div className="error-message">{formik.errors.phone}</div>
//                 )}

//                 <label></label>
//                 <input 
//                   type='email'
//                   name='email'
//                   id='signupEmail'
//                   placeholder='Enter the email'
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.email && formik.errors.email && <div className="error-message">{formik.errors.email}</div>}


//                 <label></label>
//                 <input 
//                   type='password'
//                   name='password'
//                   id='signupPassword'
//                   placeholder='Password'
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />{formik.touched.password && formik.errors.password && <div className="error-message">{formik.errors.password}</div>}

//                 <label></label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   id='confirmPassword'
//                   value={formik.values.confirmPassword}
//                   placeholder="Confirm password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//                   <div className="error-message">{formik.errors.confirmPassword}</div>
//                 )}

//                 <button type='submit'>submit</button>
//                 <div className='ptag'>
//                   <p >Do you have an account? <Link to='/login'>Login</Link></p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }
// export default Signup  

