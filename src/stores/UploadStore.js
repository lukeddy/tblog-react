import {decorate, observable, runInAction} from "mobx";
import axios from "axios";
import {STATUS_BEGIN, STATUS_ERROR, STATUS_INIT, STATUS_SUCCESS} from './Status';

export default class UploadStore {

   status = STATUS_INIT;
   alertData={};

    uploadFile = (data)=>{
        this.status=STATUS_BEGIN;
       this.alertData={};

      return new Promise(async (resolve, reject) => {
          try {
              const headers={
                  headers: { 'Content-Type': 'multipart/form-data' },
              }
              const response = await axios.post("/upload/file", data,headers);
              if(response.data.status){
                  this.status=STATUS_SUCCESS;
                  this.alertData={status:false,msg:response.data.msg};
                  resolve(response)
              }else{
                  this.status =STATUS_ERROR;
                  this.alertData={status:false,msg:response.data.msg};
              }
          } catch (error) {
              runInAction(() => {
                  this.status = STATUS_ERROR;
                  this.alertData={status:false,msg:'上传图片时出错'};
              });
              reject(error);
          }

      });
  }

}


decorate(UploadStore, {
    status : observable,
    alertData:observable,
});