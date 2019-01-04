import {decorate, observable, runInAction} from "mobx";
import axios from "axios";
import {STATUS_BEGIN, STATUS_ERROR, STATUS_INIT, STATUS_SUCCESS} from './Status';

export default class PostStore {

    pager=null;
    post=null;

   status = STATUS_INIT;
   alertData={};

    fetchPostList = (data)=>{
        this.status=STATUS_BEGIN;
        this.post=null;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post("/post/list", data);
                if(response.data.status){
                    this.status=STATUS_SUCCESS;
                    this.pager=response.data.data;
                    resolve(response)
                }else{
                    this.status =STATUS_ERROR;
                    this.alertData={status:false,msg:response.data.msg};
                }
            } catch (error) {
                runInAction(() => {
                    this.status = STATUS_ERROR;
                    this.alertData={status:false,msg:'获取列表数据时出错'};
                });
                reject(error);
            }

        });
    }

    fetchPostDetail = (postId)=>{
        this.status=STATUS_BEGIN;
        this.post=null;
        this.alertData={};


      return new Promise(async (resolve, reject) => {
          try {
              const response = await axios.get("/post/detail/"+postId);
              if(response.data.status){
                  this.status=STATUS_SUCCESS;
                  console.log(response.data);
                  this.post=response.data.data;
                  resolve(response)
              }else{
                  this.status =STATUS_ERROR;
                  this.alertData={status:false,msg:response.data.msg};
              }
          } catch (error) {
              runInAction(() => {
                  this.status = STATUS_ERROR;
                  this.alertData={status:false,msg:'获取帖子数据时出错'};
              });
              reject(error);
          }

      });
  }

    createPost = (data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post("/post", data);
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
                    this.alertData={status:false,msg:'创建帖子数据时出错'};
                });
                reject(error);
            }

        });
    }

    updatePost = (postId,data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put("/post/"+postId, data);
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
                    this.alertData={status:false,msg:'更新帖子数据时出错'};
                });
                reject(error);
            }

        });
    }

    deletePost = (postId)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.delete("/post/"+postId);
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
                    this.alertData={status:false,msg:'删除帖子数据时出错'};
                });
                reject(error);
            }

        });
    }
}


decorate(PostStore, {
    pager:observable,
    post:observable,
    status : observable,
    alertData:observable,
});