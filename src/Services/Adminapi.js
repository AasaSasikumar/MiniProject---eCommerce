import { adminInstance } from "../axios/axiosinstance";

//POST METHODS

export const login = (value) => {
  return adminInstance.post("/login", { ...value });
};
//GET METHOD
 export const userList =()=>{
   return adminInstance.get("/user")
 };


export const Products = (value) => {
  return adminInstance.post("/add", {...value});
}
export const deleteProduct=(productId)=>{
  return adminInstance.get(`/product/${productId}`)
}
export const productList = () => {
  return adminInstance.get('/Product');
};
//DELETE METHOD
 export const removeUser = (userId) => {
   return adminInstance.delete(`/user/${userId}`);
 };
 
 //PUT Method

export const editProduct = (id, productData) => {
  return adminInstance.put(`/Product/${id}`, productData);
};

    // Fetch product details by ID

export const getProductById = (id) => {
  return adminInstance.get(`/product/${id}`);
};


// export const addProduct = async (formData) => {
//   try {
//     const response = await adminInstance.post('/add', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error adding product:', error);
//     return { error: error.response?.data?.message || 'An unexpected error occurred' };
//   }
// };
