import React from "react";

class Pagination extends React.Component{

    render(){
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className="disabled">
                        <span aria-hidden="true">«</span>
                    </li>
                    <li className="active">
                        <a href="/tblog/?pageSize=30&amp;pageNO=1&amp;tab=all">1</a>
                    </li>
                    <li>
                        <a href="/tblog/?pageSize=30&amp;pageNO=1&amp;tab=all">2</a>
                    </li>
                    <li>
                        <a href="/tblog/?pageSize=30&amp;pageNO=1&amp;tab=all">3</a>
                    </li>
                    <li className="disabled">»</li>
                    <li>
                        <span>当前第1页,共3页</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination