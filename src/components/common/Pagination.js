import React from "react";
import PropTypes from 'prop-types';

class Pagination extends React.Component{

    render(){
        const {totalPages,currentPage,jumpPage}=this.props

        return (
            <nav>
                <ul className="pagination">
                    <li className="disabled">
                        <span aria-hidden="true">«</span>
                    </li>
                    {[...Array(totalPages)].map((e, i) => {
                        const pageNo=i+1
                        return(
                            <li key={pageNo} className={currentPage===pageNo?'active':''}>
                                <span className="page-link" onClick={jumpPage.bind(this,pageNo)}>{pageNo}</span>
                            </li>
                        )
                    })}
                    <li className="disabled"><span aria-hidden="true">»</span></li>
                    <li>
                        <span>当前第{currentPage}页,共{totalPages}页</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes={
  totalPages:PropTypes.number.isRequired,
  currentPage:PropTypes.number.isRequired,
  jumpPage:PropTypes.func.isRequired
}

export default Pagination