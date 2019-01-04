import {decorate, observable,action, runInAction} from "mobx";
import axios from "axios";
import {STATUS_BEGIN, STATUS_ERROR, STATUS_INIT, STATUS_SUCCESS} from './Status';

export default class IndexStore {

    pager=null;
    catList=[];
    currentFilter={
        pageNO:1,
        tab:"all"
    };

   status = STATUS_INIT;
   alertData={};

   fetchHomeData = (data)=>{
        this.status=STATUS_BEGIN;
        this.pager=null;
        this.updateFilter(data.pageNo,data.tab);
       this.alertData={};

      return new Promise(async (resolve, reject) => {
          try {
              const response = await axios.post("/home", data);
              if(response.data.status){
                  this.status=STATUS_SUCCESS;
                  console.log(response.data);
                  this.pager=response.data.data.pager;
                  this.catList=response.data.data.catList;
                  this.currentFilter=response.data.data.indexVo;
                  resolve(response)
              }else{
                  this.status =STATUS_ERROR;
                  this.alertData={status:false,msg:response.data.msg};
              }
          } catch (error) {
              runInAction(() => {
                  this.status = STATUS_ERROR;
                  this.alertData={status:false,msg:'获取首页数据时出错'};
              });
              reject(error);
          }

      });
  }

   updateFilter=(pageNo,tab)=>{
       this.currentFilter.pageNO=pageNo;
       this.currentFilter.tab=tab;
   }
}


decorate(IndexStore, {
    pager:observable,
    catList:observable,
    currentFilter:observable,
    status : observable,
    alertData:observable,
    updateFilter:action,
});