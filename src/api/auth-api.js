import axios from "./axios";

export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
export const getAllRoom = (input) => axios.get("/auth/getAllRoom", input);
export const getAllChair = (input) => axios.get("/auth/getAllChair", input);
export const getAllBooking = (input) => axios.get("/auth/getAllBooking", input);
export const getAllMeeting = (input) => axios.get("/auth/getAllMeeting", input);
export const findCard = (input) => axios.get("/auth/findCard", input);
//
export const createRoom = (input) => axios.post("/auth/createRoom", input);
export const createChair = (input) => axios.post("/auth/createChair", input);
export const createBooking = (input) =>
  axios.post("/auth/createBooking", input);
export const createMeeting = (input) =>
  axios.post("/auth/createMeeting", input);
export const findCardById = (input) => axios.post("/auth/findCardById", input);
