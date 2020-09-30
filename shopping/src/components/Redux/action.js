
import axios from 'axios'
import {GET_ALL_CATEGORIES, GET_ALL_BLOGS, GET_ALL_PRODUCT, ADD_BLOG} from './actionType'
import {LOGIN} from './actionType'
import {UPDATE_BLOG, DELETE_BLOG} from './actionType'

/*======= API =======*/
export function fetchCategories(){
  return function(dispatch){
    let url = "http://localhost:9090/api/categories/getall"
    axios.get(url)
    .then(res =>{
      //this.setState({data: res.data})
      console.log("fetchCategories", res.data)
      dispatch(fetchCategories_Success(res.data))
    })
  }
}

export function fetchBlogs(){
  return function(dispatch){
    let url = "http://localhost:9090/api/blogs/getall"
    axios.get(url)
    .then(res =>{
      //this.setState({data: res.data})
      console.log("fetchBlogs", res.data)
      dispatch(fetchBlogs_Success(res.data))
    })
  }
}

export function fetchCategoriesVer2(){
  return function(dispatch){
    let url = "http://localhost:9090/api/categories/getall"
    axios.get(url)
    .then(res => {
      dispatch(fetchCategoriesVer2_Success(res.data))
    })
  }
}

export function fetchProduct(){
  return function(dispatch){
    let url = "http://localhost:9090/api/products/getall"
    axios.get(url)
    .then(res =>{
      console.log("fetchProducts", res.data)
      dispatch(fetchProduct_Success(res.data))
    })
  }
}

export function createBlog(item){
  return function(dispatch){
    let url = "http://localhost:9090/api/blogs/create"
    axios.post(url, item)
    .then(res =>{
      console.log("create new blog:", res.data)
      dispatch(createBlog_Success(res.data))
    })
    .then(errors =>{
      console.log("create blog errore:", errors)
    })
  }
}

export function deleteBlog(blog_id){
  return function(dispatch){
    let url = "http://localhost:9090/api/blogs/delete/" + blog_id
    axios.get(url)
    .then(res =>{
      console.log("delete Blog:", res.data)
      dispatch(deleteBlog_Success(res.data))
    })
    .then(errors =>{
      console.log("delete Blog errore:", errors)
    })
  }
}

export function updateBlog(item){
  return function(dispatch){
    let url = "http://localhost:9090/api/blogs/update"
    axios.post(url, item)
    .then(res =>{
      console.log("update Blog:", res.data)
      dispatch(updateBlog_Success(res.data))
    })
    .then(errors =>{
      console.log("update Blog errore:", errors)
    })
  }
}


export function signin(user){
  return function(dispatch){
    let url = "http://localhost:9090/api/login"
    axios.post(url, user)
    .then(res =>{
      console.log("login success:", res.data)
      dispatch(signin_Success(res.data))
    })
    .then(errors =>{
      console.log("login error: ", errors)
    })
  }
}

/*======= API =======*/

/* Action */
export function fetchCategories_Success(categories){
  return {
    type: GET_ALL_CATEGORIES,
    //tap du lieu thong tin can
    categories
  }
}

export function fetchCategoriesVer2_Success(categories){
  return{
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export function fetchBlogs_Success(blogs){
  return {
    type: GET_ALL_BLOGS,
    blogs
  }
}

export function fetchProduct_Success(product){
  return{
    type: GET_ALL_PRODUCT, 
    product
  }
}

export function createBlog_Success(blogs){
  return{
    type: ADD_BLOG, 
    blogs
  }
}

export function deleteBlog_Success(blogs){
  return{
    type: DELETE_BLOG,
    blogs
  }
}

export function updateBlog_Success(blogs){
  return{
    type: UPDATE_BLOG,
    blogs
  }
}

export function signin_Success(user){
  return{
    type: LOGIN, 
    user
  }
}