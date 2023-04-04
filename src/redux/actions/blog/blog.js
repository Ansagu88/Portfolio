import axios from 'axios';

import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_FAILURE,
    GET_BLOG_LIST_BY_CATEGORY_SUCCESS,
    GET_BLOG_LIST_BY_CATEGORY_FAILURE,
    GET_BLOG_DETAIL_SUCCESS,
    GET_BLOG_DETAIL_FAILURE,
    GET_SEARCH_BLOG_SUCCESS,
    GET_SEARCH_BLOG_FAILURE
} from '../types';

export const get_blog_List = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list/`, config);
        if (res.status ===200){
        dispatch({
            type: GET_BLOG_LIST_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_BLOG_LIST_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_BLOG_LIST_FAILURE,
        });
    } 
}

export const get_blog_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list/?p=${page}`, config);
        if (res.status ===200){
        dispatch({
            type: GET_BLOG_LIST_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_BLOG_LIST_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_BLOG_LIST_FAILURE,
        });
    } 
}

export const get_blog_List_by_category = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category/?slug=${slug}`, config);
        if (res.status ===200){
        dispatch({
            type: GET_BLOG_LIST_BY_CATEGORY_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_BLOG_LIST_BY_CATEGORY_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_BLOG_LIST_BY_CATEGORY_FAILURE,
        });
    } 
}

export const get_blog_List_by_category_page = (slug, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category/?slug=${slug}&page=${page}`, config);
        if (res.status ===200){
        dispatch({
            type: GET_BLOG_LIST_BY_CATEGORY_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_BLOG_LIST_BY_CATEGORY_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_BLOG_LIST_BY_CATEGORY_FAILURE,
        });
    } 
}

export const get_blog_detail = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${slug}/`, config);
        if (res.status ===200){
        dispatch({
            type: GET_BLOG_DETAIL_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_BLOG_DETAIL_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_BLOG_DETAIL_FAILURE,
        });
    } 
}

export const get_search_blog = (search_term) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/?search_term=${search_term}`, config);
        if (res.status ===200){
        dispatch({
            type: GET_SEARCH_BLOG_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_SEARCH_BLOG_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_SEARCH_BLOG_FAILURE,
        });
    } 
}

export const get_search_blog_page = (search_term, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/?search_term=${search_term}&page=${page}`, config);
        if (res.status ===200){
        dispatch({
            type: GET_SEARCH_BLOG_SUCCESS,
            payload: res.data
        });
    }   else{
        dispatch({
            type: GET_SEARCH_BLOG_FAILURE,
            
        });
    } 
    
    }catch (err) {
        dispatch({
            type: GET_SEARCH_BLOG_FAILURE,
        });
    } 
}
