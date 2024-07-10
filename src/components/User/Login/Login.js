// import React from "react"; // Import useState
// import "./Login.css";
// // import loginImage from "../../../Assets/Images/login.jpg";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// import { toast } from "react-toastify";
// import { login } from "../../../Services/Userapi";


// function Login() {
//   const navigate = useNavigate();

//   // const [userDetails, setUserDetails] = useState(null);

 

//   const initialValues={
//       email: "",
//       password: "",
//     };

//     const validationSchema = Yup.object().shape({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string().required("Password is required"),
//     });

//     const onSubmit = async (values) => {

//       try {
//         const { data } = await login(values);
  
//         if (data.created) {
//           localStorage.setItem("jwt", data?.token);
//             toast.success(data.message, { position: "top-center" });
//             navigate('/');

//           } else {
//             toast.error(data.message, { position: "top-center" });
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };
  

// const formik = useFormik({
//   initialValues,
//   validationSchema,
//   onSubmit,
// })

//   return (
//     <>
//       <div className="loginUser">
//         <h1 className="loginUsrh1">SHOPSEE</h1>
//         <div className="loginUsr">
//           <div className="loginSection">
//             <form onSubmit={formik.handleSubmit}>
//               <h1>Account Login</h1>
//               <p>Please enter your email and password.</p>
//               <div className="loginUserInput">
//                 <div className="loginUsername">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="loginEmail"
//                     className="loginInput"
//                     placeholder="Enter your email"
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
//                 <div className="loginPassword">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="loginPassword"
//                     className="loginInput"
//                     placeholder="Enter your password"
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
//                 <div className="loginSubmit">
//                   <button type="submit">Login</button>
//                 </div>
//                 <br />
//                 <div className="loginOr">
//                   <p>or</p>
//                 </div>
//                 <br />
//                 <div className="loginCreateAccount">
//                   <button type="button">
//                     Create Account
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//            <div className="loginImageSection">
//             {/* <img src={loginImage} alt="" className="loginImage" /> */}
//           </div>
//         </div>
//        </div>
//      </>
//    );
//  }

// export default Login;



// import React from "react"; 
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import { login } from "../../../Services/Userapi";

// function Login() {
//   const navigate = useNavigate();

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const onSubmit = async (values) => {
//     try {
//       const { data } = await login(values);

//       if (data.created) {
//         localStorage.setItem("jwt", data?.token);
//         toast.success(data.message, { position: "top-center" });
//         navigate('/');
//       } else {
//         toast.error(data.message, { position: "top-center" });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   const goToSignup = () => {
//     navigate('/signup');
//   };

//   return (
//     <>
//       <div className="loginUser">
//         <h1 className="loginUsrh1">SHOPSEE</h1>
//         <div className="loginUsr">
//           <div className="loginSection">
//             <form onSubmit={formik.handleSubmit}>
//               <h1>Account Login</h1>
//               <p>Please enter your email and password.</p>
//               <div className="loginUserInput">
//                 <div className="loginUsername">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="loginEmail"
//                     className="loginInput"
//                     placeholder="Enter your email"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.email && formik.errors.email && (
//                     <p className="error-message">{formik.errors.email}</p>
//                   )}
//                 </div>
//                 <br />
//                 <div className="loginPassword">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="loginPassword"
//                     className="loginInput"
//                     placeholder="Enter your password"
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.password && formik.errors.password && (
//                     <p className="error-message">{formik.errors.password}</p>
//                   )}
//                 </div>
//                 <br />
//                 <div className="loginSubmit">
//                   <button type="submit">Login</button>
//                 </div>
//                 <br />
//                 <div className="loginOr">
//                   <p>or</p>
//                 </div>
//                 <br />
//                 <div className="loginCreateAccount">
//                   <button type="button" onClick={goToSignup}>Create Account</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="loginImageSection">
//             {/* <img src={loginImage} alt="" className="loginImage" /> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;




import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { login } from "../../../Services/Userapi";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await login(values);

      if (data.status) {
        localStorage.setItem("jwt", data.token);
        toast.success(data.message, { position: "top-center" });
        navigate('/');
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

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="loginUser">
      <h1 className="loginUsrh1">SHOPSEE</h1>
      <div className="loginUsr">
        <div className="loginSection">
          <form onSubmit={formik.handleSubmit}>
            <h1>Account Login</h1>
            <p>Please enter your email and password.</p>
            <div className="loginUserInput">
              <div className="loginUsername">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="loginEmail"
                  className="loginInput"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="error-message">{formik.errors.email}</p>
                )}
              </div>
              <br />
              <div className="loginPassword">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="loginPassword"
                  className="loginInput"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="error-message">{formik.errors.password}</p>
                )}
              </div>
              <br />
              <div className="loginSubmit">
                <button type="submit">Login</button>
              </div>
              <br />
              <div className="loginOr">
                <p>or</p>
              </div>
              <br />
              <div className="loginCreateAccount">
                <button type="button" onClick={goToSignup}>Create Account</button>
              </div>
            </div>
          </form>
        </div>
        <div className="loginImageSection">
          {/* <img src={loginImage} alt="" className="loginImage" /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;





// import React from 'react';
// import './Login.css';
// import * as Yup from 'yup';
// import { login } from '../../../Services/Userapi';
// import { useNavigate,Link } from 'react-router-dom';
// import { useFormik } from 'formik';
// //  import 'react-toastify/dist/ReactToastify.css';
// //  import { ToastContainer } from 'react-toastify';

// import { toast } from 'react-toastify';

// function Login() {
//   const navigate = useNavigate();
  
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   password: Yup.string().min(8, 'password must be at least 8 characters').required('password is required'),
// });



//   const formik = useFormik({
//     initialValues: {
//       email:'',
//       password:'',
//     },
//     validationSchema:validationSchema,
//     onSubmit: async (values) => {
    
//       try{
//         console.log("On submit !!!");
//       const { data } = await login(values);
//       console.log(data, "USER RETURN DATA !!!");
//       if(data.created){
//         localStorage.setItem("jwt", data.token);
//         toast.success("Login Success", { position:"top-right" });
//         navigate("/");

//       }else {
//         toast.error(data.message, { position:"top-right" });
//       }
//     } catch (error) {
//       console.log(error);
      
//     }
// },
// });


//   return(
    
//     // <div className='logimage'>
//       <div className='login-page'>
//         <div className='login'>
//           <div className='userform'>
//             <form onSubmit={formik.handleSubmit}>
//             <h2>Login</h2> <br />
//             <label></label>
//             <input
//             type='email'
//             name='email'
//             id='loginEmail'
//             placeholder='Email Address'
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur} />
//             {formik.touched.email && formik.errors.email && <div className='errors-message'>{formik.errors.email}</div>}
//             <label></label>
//             <input
//             type='password'
//             name='password'
//             id='loginPassword'
//             placeholder='********'
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur} />
//             {formik.touched.password && formik.errors.password && <div className='errors-message'>{formik.errors.password}</div>}
            
//             <button type='submit'>Login</button>
            
//             <p className='ptag'>Don't have an account?<Link to = '/signup'>SignUp</Link></p>
//             </form>
//           </div>
//         </div>
//           {/* <ToastContainer/>   */}
//       </div> 
//     // </div>

//   )
    
// }

// export default Login
  