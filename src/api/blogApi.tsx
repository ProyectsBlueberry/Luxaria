import axios from 'axios';

export const PREFIX_API = axios.create({ baseURL: '' });

const BLOG_API = axios.create({ baseURL : 'https://admin-blog.blueberry.mx/api' });

export default BLOG_API;