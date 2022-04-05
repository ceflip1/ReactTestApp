import  {fileList , fileDowload}  from '../util/searchData.js';
import config from '../../config/Config.js';
import Util from "../util/Utils.js";
const util = new Util();

class FileController {
    static async getSerchFormatterData(req, res) {              
        const fileName = req.query;
        let file;
        let urlDowload;
        let fileDataDowload;
        let dataFormatter =[];
         if(fileName.fileName !== undefined ){
            try {
                urlDowload = config.SERVICE_FILE_DOWLOAD + fileName.fileName;      
                fileDataDowload  = await fileDowload(urlDowload,config.BEARER); 

                 if(fileDataDowload === config.FAIL_CODE_500 || fileDataDowload === config.FAIL_CODE_404 || fileDataDowload.length === 0 ){
                   console.log(config.INVALID_DATA,fileName.fileName,fileDataDowload);
                   util.setError(config.FAIL_CODE, config.INVALID_DATA);
                 }else{
                    fileDataDowload.forEach(fileData =>{
                        dataFormatter.push(fileData);
                    } );
                    
                    util.setSuccess(config.SUCCESS_CODE, config.SUCCESSFUL_SERVICE, dataFormatter);
                 }  
            } catch (error) {
                console.error(`error failed  ${error}`);
                util.setError(config.FAIL_CODE, config.FAILED_SERVICE);
                return util.send(res);
            }
            return util.send(res);
         }else{
            try {
                file = await fileList(config.SERVICE_FILE_LIST,config.BEARER);
                for (let i = 0; i < file.length; i++) {
                    urlDowload = config.SERVICE_FILE_DOWLOAD + file[i]; 
                    fileDataDowload  = await fileDowload(urlDowload,config.BEARER);    
                     if(fileDataDowload === config.FAIL_CODE_500 || fileDataDowload === config.FAIL_CODE_404 || fileDataDowload.length === 0 ){
                       console.log(config.INVALID_DATA,file[i],fileDataDowload);
                     }else{
                        fileDataDowload.forEach(fileData =>{
                            dataFormatter.push(fileData);
                        } );                      
                     }           
                }
                util.setSuccess(config.SUCCESS_CODE, config.SUCCESSFUL_SERVICE, dataFormatter);
            } catch (error) {
                console.error(`error failed  ${error}`);
                util.setError(config.FAIL_CODE, config.FAILED_SERVICE);
                return util.send(res);
            }
            return util.send(res);
         }


    }


    static async getAllList(req, res) {
        let filesData;
        try {
            filesData = await fileList(config.SERVICE_FILE_LIST,config.BEARER);
            util.setSuccess(config.SUCCESS_CODE, config.SUCCESSFUL_SERVICE, filesData);
        } catch (error) {
            console.error(`error failed  ${error}`);
            util.setError(config.FAIL_CODE, config.FAILED_SERVICE);
            return util.send(res);
        }
        return util.send(res);
    }
}

export default FileController;