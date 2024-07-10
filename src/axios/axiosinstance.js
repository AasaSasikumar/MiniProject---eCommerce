// import axios from "axios"
// const userInstance=axios.create({baseURL:"http://localhost:5000"})
// const AdminInstance=axios.create({baseURL:"http://localhost:5000/admin"})
// export{AdminInstance,userInstance}
// import axios from "axios"


// const userInstance = axios.create({
//     baseURL: "http://localhost:5000/"
// });

// const adminInstance = axios.create({
//     baseURL: "http://localhost:5000/admin/",
//     headers: {
//       'Content-Type': 'application/json',
//     },
// });

// // userInstance.interceptors.request.use((request) => {
// //     const token = localStorage.getItem("jwt");
// //     request.headers.Authorization = `Bearer ${token}`;
// //     return request;
// // });

// userInstance.interceptors.request.use((request) => {
//     const token = localStorage.getItem("jwt");
//     request.headers.Authorization = `Bearer ${token}`;
//     return request;
//   });
  
// adminInstance.interceptors.request.use((request) => {
//     const token = localStorage.getItem("adminjwt");
//     request.headers.Authorization = `Bearer ${token}`;
//     return request;
// });

// export { userInstance, adminInstance }






import axios from "axios";

const userInstance = axios.create({
  baseURL: "http://localhost:5000/"
});

const adminInstance = axios.create({
  baseURL: "http://localhost:5000/admin/",
  headers: {
    'Content-Type': 'application/json',
  },
});

userInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

adminInstance.interceptors.request.use((request) => {
  const token = localStorage.getItem("adminjwt");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export { userInstance, adminInstance };
