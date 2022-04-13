import axios from "axios";
// const TUITS_API = 'https://web-dev-serv.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`


export const createTuit = async (tuit) => {}
export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}
export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}