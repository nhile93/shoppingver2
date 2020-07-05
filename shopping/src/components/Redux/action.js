
import axios from 'axios'
import {GET_ALL_CATEGORIES} from './actionType'
import {GET_ALL_BLOGS} from './actionType'
import {GET_ALL_PRODUCT} from './actionType'

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