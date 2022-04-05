import fetch  from 'node-fetch';
import Util from "../util/Utils.js";
const util = new Util();

const fileList = async function(url, bearer) {
    try {
        const data = await fetch(url,{
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'application/json'
            }
        });
        const dataList = await data.json();
        return  Object.values(dataList['files']);
    } catch (error) {
        console.error(`error failed  ${error}`); 
        util.setError(config.FAIL_CODE, config.FAILED_SERVICE);
        return util.send(res);       
    }
}


const fileDowload = async function(urlDowload, bearer) {
    try {
        const dataDowload = await fetch(urlDowload,{
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'text/csv;charset=UTF-8'
            }
        });     

        if(dataDowload.status !== 200){
            return dataDowload.status;
        }else{

            const dowload = await dataDowload.text();
            const dataformatter = csvToArray(dowload); 

            for(let val = 0; val < dataformatter.length; val++){
                if(dataformatter[val].file === undefined ){
                    dataformatter.splice(val, 1);
                    val = val - 1; 
                }else if (dataformatter[val].text === undefined) {
                    dataformatter.splice(val, 1);
                    val = val - 1;
                }else if (dataformatter[val].number === undefined){
                    dataformatter.splice(val, 1);
                    val = val - 1;
                }else if (dataformatter[val].hex === undefined){
                    dataformatter.splice(val, 1);
                    val = val - 1;
                }  
            }        
            return  dataformatter ;
        }
    } catch (error) {
        console.error(`error failed  ${error}`); 
        util.setError(config.FAIL_CODE, config.FAILED_SERVICE);
        return util.send(res);       
    }
}

function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
  
    return arr;
  }

export {
    fileList,
    fileDowload
}; 
