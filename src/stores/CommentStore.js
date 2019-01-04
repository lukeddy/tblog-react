import {decorate, observable, runInAction} from "mobx";
import axios from "axios";
import {STATUS_BEGIN, STATUS_ERROR, STATUS_INIT, STATUS_SUCCESS} from './Status';

export default class CommentStore {

   comments=[];

   status = STATUS_INIT;
   alertData={};

   fetchComments = (postId)=>{
        this.status=STATUS_BEGIN;
        this.post=null;
       this.alertData={};


      return new Promise(async (resolve, reject) => {
          try {
              const response = await axios.get("/comment/public/"+postId);
              if(response.data.status){
                  this.status=STATUS_SUCCESS;
                  console.log(response.data);
                  this.comments=response.data.data;
                  resolve(response)
              }else{
                  this.status =STATUS_ERROR;
                  this.alertData={status:false,msg:response.data.msg};
              }
          } catch (error) {
              runInAction(() => {
                  this.status = STATUS_ERROR;
                  this.alertData={status:false,msg:'获取帖子评论时出错'};
              });
              reject(error);
          }

      });
  }

    addComment = (data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post("/comment/",data);
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
                    this.alertData={status:false,msg:'添加评论时出错'};
                });
                reject(error);
            }

        });
    }

    deleteComment = (commentId)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.delete("/comment/"+commentId);
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
                    this.alertData={status:false,msg:'删除评论时出错'};
                });
                reject(error);
            }

        });
    }

    thumbsupComment = (commentId)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put("/comment/thumbsup/"+commentId);
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
                    this.alertData={status:false,msg:'点赞评论时出错'};
                });
                reject(error);
            }

        });
    }

    replyComment = (data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post("/comment/reply",data);
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
                    this.alertData={status:false,msg:'回复评论时出错'};
                });
                reject(error);
            }

        });
    }

    banBadComment = (commentId, data)=>{
        this.status=STATUS_BEGIN;
        this.alertData={};
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.put("/comment/ban/"+commentId,data);
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
                    this.alertData={status:false,msg:'举报评论时出错'};
                });
                reject(error);
            }

        });
    }
}


decorate(CommentStore, {
    comments:observable,
    status : observable,
    alertData:observable,
});