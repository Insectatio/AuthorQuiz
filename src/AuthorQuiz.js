import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1" id="header">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown.</p>
    </div>
  </div>);
}

function Book({ title }) {
  return (<div className="answer">
    <h2>{title}</h2>
  </div>)
}

function Turn({author, books}) {
  return (<div className="row turn" style={{backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} />)}
    </div>
  </div>);
}

function Continue() {
  return (<div></div>);
}

function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
        </p>
    </div>
  </div>);
}

function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
