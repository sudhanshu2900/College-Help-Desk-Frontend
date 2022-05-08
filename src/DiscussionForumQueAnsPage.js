import React from "react";
import FroalaEditor from "froala-editor";
import "froala-editor/js/plugins/align.min.js";
import { Link } from "react-router-dom";
import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsChat,
  BsArrowLeftCircle,
} from "react-icons/bs";
import Footer from "./Components/Footer";
import DiscussionForumAnswer from "./Components/DiscussionForumAnswer";

function DiscussionForumQueAnsPage() {
  return (
    <>
      <div className="container">
        <section id="queAns">
          <div style={{ color: "lightgray" }}>
            <Link to="/discuss">
              <BsArrowLeftCircle size={30} />
            </Link>
          </div>

          <div className="detailedQuestion">
            <div className="queAnsQuestion">
              <h2>Java linked list is not found</h2>
            </div>
            <div className="contentFunctionality">
              <div className="queAnsFunctionality">
                <BsHandThumbsUp size={25} style={{ marginBottom: "20px" }} />
                <BsHandThumbsDown size={25} style={{ marginBottom: "20px" }} />
                <BsChat size={25} />
              </div>
              <div className="queAnsContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi natus consectetur veritatis est laudantium alias qui
                  quo, odit cumque asperiores tempore aperiam laborum neque
                  repudiandae facere consequuntur nemo. Animi harum, corporis
                  veritatis aliquid molestias nisi illum vero et culpa
                  laboriosam officia dicta amet aut expedita tempore. Temporibus
                  saepe vero labore similique eligendi fugiat nihil rem magnam
                  architecto sequi? Recusandae, earum? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Eligendi natus consectetur
                  veritatis est laudantium alias qui quo, odit cumque asperiores
                  tempore aperiam laborum neque repudiandae facere consequuntur
                  nemo. Animi harum, corporis veritatis aliquid molestias nisi
                  illum vero et culpa laboriosam officia dicta amet aut expedita
                  tempore.
                </p>
              </div>
            </div>
          </div>

          <hr style={{ color: "lightgray" }} />
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <DiscussionForumAnswer />
              <DiscussionForumAnswer />
              <DiscussionForumAnswer />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12"></div>
          </div>
          <hr style={{ color: "lightgray" }} />
        </section>

        <section id="ansForm">{new FroalaEditor("#edit")}</section>
      </div>

      <section id="footer">
        <Footer rel="#queAns" />
      </section>
    </>
  );
}

export default DiscussionForumQueAnsPage;
