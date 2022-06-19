import { config } from "../constants";
import axios from 'axios'

export const getArticle = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/article`)
    if(res){
        return res.data
    }
    return null
}

export const getTopArticle = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/article/top`)
    if(res){
        return res.data
    }
    return null
}