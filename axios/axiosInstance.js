import axios from "axios"
const userInstance=axios.create({baseURL:"http://localhost:5000"})
const AdminInstance=axios.create({baseURL:"http://localhost:5000/admin"})
export{AdminInstance,userInstance}