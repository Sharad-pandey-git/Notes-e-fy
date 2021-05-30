import React from "react"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";

export function BooksNotes () {
    const {streamName, sem ,subject } = useParams();
    return (
      <div className="container text-center d-flex flex-column justify-content-around alingn-items-center mb-4"
        style={{
          minHeight: "60vh"
        }}
      >
        <div className="text-center py-4">
          <h3
            style={{ fontFamily: "cursive", fontWeight: "bold" }}
          >
            <u> {subject} </u>
          </h3>
        </div>


        { 
          <div className="d-flex flex-row">
            <div className="container">
              <div className="card text-white"
                style={{
                  background: "linear-gradient(#800080,#1a001a)"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="..." className="card-img-top" />
                <div className="card-body">
                <h5> <NavLink exact to={`/semister/${streamName}/${sem}/${subject}/notes`} className="text-white"> Notes </NavLink> </h5>
                  <p>Get the books related the Syllabus</p>

                </div>
              </div>
            </div>
            <div className="container">
              <div className="card bg-dark text-white"
                style={{
                  background: "linear-gradient(#800080,#1a001a)"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="..." className="card-img-top" />
                <div className="card-body">
                  <h5> <NavLink exact to={`/semister/${streamName}/${sem}/${subject}/books`} className="text-white"> Books </NavLink> </h5>
                  <p>Get all possible notes from the professors</p>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    )
  }