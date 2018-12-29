import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import marked from 'marked';
import highlight from 'highlight.js';


class SMEditor extends React.Component{

    state = {
        markdown: '',
        html:'',
    };

    handleChange=(value)=>{
        this.setState({markdown:value},console.log(this.state.markdown))
        this.setState({html:this.markdown2Html(value)},console.log(this.state.html))
    };

    markdown2Html=(markdown)=>{
       const html=marked(markdown,{
               renderer: new marked.Renderer(),
                gfm: true,
                pedantic: false,
                sanitize: false,
                tables: true,
                breaks: true,
                smartLists: true,
                smartypants: true,
                highlight: function (code) {
                    console.log('code',code)
                    return highlight.highlightAuto(code).value;
                }
        });
        console.log('parse:',html);
        return html;
    }


    render(){

      const editorOptions={
              toolbar: [
                  'bold',
                  'italic',
                  'heading',
                  '|',
                  'quote',
                  'code',
                  'table',
                  'horizontal-rule',
                  'unordered-list',
                  'ordered-list',
                  '|',
                  'link',
                  'image',
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
              ],
            renderer: this.markdown2Html,
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                return highlight.highlightAuto(code).value;
            },
        }

        return(
            <SimpleMDE
                onChange={this.handleChange}
                options={editorOptions}
            />
        );
    }
}

export default SMEditor