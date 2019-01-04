import {decorate, observable, runInAction} from "mobx";
import axios from "axios";
import {STATUS_BEGIN, STATUS_ERROR, STATUS_INIT, STATUS_SUCCESS} from './Status';

export default class CategoryStore {

    pager= null;
    allCategory=[];
    category=null;
    status = STATUS_INIT;
    alertData={};

    fetchCategoryList = (data)=>{
        this.status=STATUS_BEGIN;
        this.pager=null;
        this.alertData={};

      return new Promise(async (resolve, reject) => {
          try {
              const response = await axios.post("/category/list", data);
              if(response.data.status){
                  this.status=STATUS_SUCCESS;
                  console.log(response.data);
                  this.pager=response.data.data;
                  resolve(response)
              }else{
                  this.status =STATUS_ERROR;
                  this.alertData={status:false,msg:response.data.msg};
              }
          } catch (error) {
              runInAction(() => {
                  this.status = STATUS_ERROR;
                  this.alertData={status:false,msg:'获取栏目数据时出错'};
              });
              reject(error);
          }

      });
  }

    fetchAllCategory = ()=>{
        this.status=STATUS_BEGIN;
        this.allCategory=[];
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get("/category/all");
                if(response.data.status){
                    this.status=STATUS_SUCCESS;
                    console.log(response.data);
                    this.allCategory=response.data.data;
                    resolve(response)
                }else{
                    this.status =STATUS_ERROR;
                    this.alertData={status:false,msg:response.data.msg};
                }
            } catch (error) {
                runInAction(() => {
                    this.status = STATUS_ERROR;
                    this.alertData={status:false,msg:'获取所有栏目数据时出错'};
                });
                reject(error);
            }

        });
    }

    createCategory = (data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post("/category/add", data);
                if(response.data.status){
                    this.status=STATUS_SUCCESS;
                    console.log(response.data);
                    this.alertData={status:false,msg:response.data.msg};
                    resolve(response)
                }else{
                    this.status =STATUS_ERROR;
                    this.alertData={status:false,msg:response.data.msg};
                }
            } catch (error) {
                runInAction(() => {
                    this.status = STATUS_ERROR;
                    this.alertData={status:false,msg:'创建栏目数据时出错'};
                });
                reject(error);
            }

        });
    }

    getCategory = (catId)=>{
        this.status=STATUS_BEGIN;
        this.category=null;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get("/category/"+catId);
                if(response.data.status){
                    this.status=STATUS_SUCCESS;
                    console.log(response.data);
                    this.category=response.data.data;
                    resolve(response)
                }else{
                    this.status =STATUS_ERROR;
                    this.alertData={status:false,msg:response.data.msg};
                }
            } catch (error) {
                runInAction(() => {
                    this.status = STATUS_ERROR;
                    this.alertData={status:false,msg:'获取栏目数据时出错'};
                });
                reject(error);
            }

        });
    }

    updateCategory = (catId,data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put("/category/"+catId, data);
                if(response.data.status){
                    this.status=STATUS_SUCCESS;
                    console.log(response.data);
                    this.alertData={status:false,msg:response.data.msg};
                    resolve(response)
                }else{
                    this.status =STATUS_ERROR;
                    this.alertData={status:false,msg:response.data.msg};
                }
            } catch (error) {
                runInAction(() => {
                    this.status = STATUS_ERROR;
                    this.alertData={status:false,msg:'修改栏目数据时出错'};
                });
                reject(error);
            }

        });
    }
}


decorate(CategoryStore, {
    pager:observable,
    category:observable,
    status : observable,
    alertData:observable,
});