import axios from 'axios'

export const api = axios.create({
	baseURL: `/api/v1/outlay-rows/entity/129523/row`,
	withCredentials: false,
})
