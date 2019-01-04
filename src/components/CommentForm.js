import React from "react";
import SMEditor from './editor/SMEditor';
import PropTypes from "prop-types";
import  {inject,observer} from 'mobx-react';

class CommentForm extends React.Component{
    state={
        contentMD:"",
        contentHTML:"",
    }
    updateMarkdown=(markdown,html)=>{
        // console.log('md:',markdown)
        // console.log('html:',html)
        this.setState({contentMD:markdown});
        this.setState({contentHTML:html});
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const data={
            commentHTML: this.state.contentMD,
            commentMD: this.state.contentHTML,
            itemId: this.props.postId,
        }
        console.log('add comment up',data)
        this.props.commentStore.addComment(data).then(()=>{
            this.props.reloadComments();
        });
        // this.props.addComment(data).then((response)=>{
        //     if(response.data.status){
        //         this.props.reloadComments();
        //     }
        //     this.setState({alertData:response.data});
        // }).catch(error=>{
        //     console.log(error);
        //     this.setState({alertData:{status:false,msg:"添加评论失败:"+error.toString()}});
        // });

    }

    render(){
        const toolbar=[
            'bold',
            'italic',
            'heading',
            '|',
            'quote',
            'code',
            'horizontal-rule',
            'unordered-list',
            'ordered-list',
            '|',
            'link',
            '|',
            'side-by-side',
            'fullscreen',
            '|',
            {
                name: 'guide',
                action () {
                    const win = window.open(
                        'https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md',
                        '_blank',
                    );
                    if (win) {
                        // Browser has allowed it to be opened
                        win.focus();
                    }
                },
                className: 'fa fa-info-circle',
                title: 'Markdown 语法！',
            },
        ]

        return(
            <div id="comment-form" className="row comment-form">
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label>评论</label>
                            <SMEditor toolbar={toolbar} updateMarkdown={this.updateMarkdown} defaultValue={this.state.contentMD}/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="itemId" value="5b87dceabf578d115d2357ac"/>
                            <input type="hidden" name="authorId" value="5b7d59bbbf578d05d7046ef6"/>
                            <button type="submit" className="btn btn-success pull-right">发表评论</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

PropTypes.propTypes={
    postId:PropTypes.string.isRequired,
    reloadComments:PropTypes.func.isRequired,
}

export default inject("commentStore")(observer(CommentForm))