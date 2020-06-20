import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import AuthContext from '../context/auth/authContext';
import "../index.css";

function Detail(props) {

  //authorize user for each page//
  const authContext = useContext(AuthContext);
  useEffect(()=> {
    authContext.loadUser();
  //eslint-disable-next-line
}, []);

  const [content, setContent] = useState({})
  // When this component mounts, grab the annoucement with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    if(props.where === "announcements") {
      API.getAnnouncement(id)
      .then(res => setContent(res.data))
      .catch(err => console.log(err));
    }else if (props.where === "calendar"){
      API.getCalendar(id)
      .then(res => setContent(res.data))
      .catch(err => console.log(err));
    };
  }, [])
  function handleFormSubmit(e){
    e.preventDefault();
  }

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {content.title} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content</h1>
              <p>
                {content.content}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to={"/"+props.where}>← Back to {props.where}</Link>
          </Col>
        </Row>
        <Row>
          <Col size="2">
          <form className="commentForm">
              <Input
                name="username"
                placeholder="Name"
              />
              <TextArea
                name="content"
                placeholder="Write what you think!"
              />
              <FormBtn comment
                onClick={handleFormSubmit}
              >
                Comment
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
