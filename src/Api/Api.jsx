import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

//Fetch data
export const fetchProducts = async( {limit, skip} ) => {
  try {
    const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
    
    return res?.status === 200 ? res?.data : [];
  } catch (err) {
    console.log(err)
  };
};

//Fetch single Product data
export const fetchSingleProduct = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    console.log(res)
    return res?.status === 200 ? res?.data : [];
  } catch (err) {
    console.log(err)
  }
};


//login
export const login = async (form) => {
  try {
    const res = await api.post(`/auth/login`,form);
    console.log(res)
    return res?.status === 200 ? res?.data : null;
  } catch (err) {
    console.log(err)
  }
};

//userData
export const userSList = async ({limit, skip}) => {
  try {
    const res = await api.get(`/users?limit=${limit}&skip=${skip}`);
    console.log(res)
    return res?.status === 200 ? res?.data : null;
  } catch (err) {
    console.log(err)
  }
};
