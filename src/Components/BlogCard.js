import React from 'react'
import "./ComponentStyle.css";
import {Link, useNavigate} from 'react-router-dom';

function BlogCard(props) {

    const navigate = useNavigate();
    const navigate2 = () => {
        navigate('/Blog1');
    }
    return (
        <>
        <br/><br/>
            <div className="container">
                <div className = "row">
                    <div className="blogCard">
                        <div id="blogHeading" className="row">{props.blogheading}</div>
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-7">{props.blogimage}</div>
                            <div id="blogContent" className="col-lg-5 col-md-5 col-sm-5">
                                <p>{props.blogdescription}</p>
                                <button type="button" id="readBtn" class="btn btn-light" onClick={() => navigate2()}>READ MORE ...</button>
                            </div>
                        </div>
                    </div> 
                </div>                
            </div>
        </>
    )
}

export default BlogCard;
