import React, { useState, useEffect } from "react"
import { WelcomePage } from "../component/welcome"
import { Books } from "../component/books"
import { NavLink, Route, HashRouter } from "react-router-dom"
import { Semister } from "../component/semister"
import { Subject } from "../component/subject"

function Base({
  children
}) {

  return (
    <div >

      <HashRouter>
        <div className="row" style={{ width: "100vw" }}>

          <div className="col-sm-2 text-white"
            style={{
              background: "linear-gradient(#800080,#1a001a)",
              borderRight: "2px solid black",
              minHeight: "100vh"
            }}
          >
            <div className="pl-4  container">
              <div className="row text-center mb-5 mt-3"
                style={{
                  borderBottom: "1px solid black"
                }}
              >
                <span><h5>Select Stream <i className="fas fa-mouse-pointer "></i></h5></span>
              </div>
              <div className="row mb-3 stream ">
                <NavLink exact to="/semister/Applied Science" className="text-white">
                  <span><i className="fas fa-hand-point-right"></i>  Fresher </span>
                </NavLink>
              </div>
              <div className="row mb-3 stream ">
                <NavLink exact to="/semister/Computer Science" className="text-white">
                  <span><i className="fas fa-hand-point-right"></i>  C.S.E </span>
                </NavLink>
              </div>
              <div className="row mb-3 stream ">
                <NavLink exact to="/semister/Civil" className="text-white">
                  <span><i className="fas fa-hand-point-right"></i>  Civil </span>
                </NavLink>
              </div>
              <div className="row mb-3 stream ">
                <NavLink exact to="/semister/Electronic&Communication" className="text-white">
                  <span><i className="fas fa-hand-point-right"></i>  E.C.E </span>
                </NavLink>
              </div>
              <div className="row mb-3 stream ">
                <NavLink exact to="/semister/Mechanical" className="text-white">
                  <span><i className="fas fa-hand-point-right"></i>  Mechanical </span>
                </NavLink>
              </div>

            </div>
          </div>

          <div className="col-sm-10 bg-warning"
            style={{
              background: "linear-gradient(#ffffff,#800080)"
            }}
          >
            {children}
            {/* // listForSelection("Notes", "Computer Science", ["Notes-1", "Notes-2", "Notes-3", "Notes-4"]) */}
            <Route path="/semister/:streamName" component={Semister} />

            <Route path="/" exact component={WelcomePage} />
            {/* { <HashRouter>
            <li> <NavLink exact to="/books">Books</NavLink> </li>
            <li> <NavLink exact to="/welcome">Welcome</NavLink> </li>

            <div className="container">
              <Route path="/books" component={Books}/>
              <Route path="/welcome" component={WelcomePage}/>
            </div>
          </HashRouter> } */}
            { }
            

          </div>
        </div>

      </HashRouter>
    </div>

  )
}

export default Base