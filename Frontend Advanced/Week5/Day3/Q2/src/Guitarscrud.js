import axios from 'axios';

let GuitarscrudObj = {};

let url = "http://localhost:3400/electrics/";

GuitarscrudObj.getData = function()
{
    return axios.get(url);
};

GuitarscrudObj.addData = function( guitarObj )
{
    return axios.post(url, guitarObj);
};

GuitarscrudObj.updateData = function( guitarObj )
{
    return axios.put(url + guitarObj.gname,  guitarObj);
};

GuitarscrudObj.deleteData = function( gname )
{
    return axios.delete(url + gname);
};

GuitarscrudObj.selectData=function(gname)
{
return axios.get(url+gname);
};

export default GuitarscrudObj;