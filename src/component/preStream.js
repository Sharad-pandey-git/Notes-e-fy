import React, { useState } from "react"
import { Books } from "./books"

function PreStream(streamName = "Stream Name", choice = "fresher", isBooks , isNotes) {

  return (
    <div className="container text-center d-flex flex-column justify-content-around alingn-items-center"
      style={{
        height: "100vh"
      }}
    >
      <div className="text-center">
        <h3
          style={{ fontFamily: "cursive", fontWeight: "bold" }}
        >
          <u> {streamName} </u>
        </h3>
      </div>


      { isBooks || isNotes ?
        Books()
        :
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
                <h5><a href="#" className="text-white"
                  onClick={() => { isBooks = true }}
                >Books</a></h5>
                { `values of isbooks ${isBooks}` }
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
                <h5><a href="#" className="text-white"
                  onClick={() => { isNotes = true }}
                >Notes</a></h5>
                <p>Get all possible notes from the professors</p>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default PreStream