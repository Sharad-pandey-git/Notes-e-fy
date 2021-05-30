import React from "react"
import { Route, useParams } from "react-router"
import { HashRouter, NavLink } from "react-router-dom"
import { Books } from "./books"
import { BooksNotes } from "./booksNotes"
import { Notes } from "./notes"
import {Subject} from "./subject"


export function Semister() {
  const { streamName } = useParams()
  let options = [];
  streamName === "Applied Science" ?
    options = [
      "Semister-1st", "Semister-2nd"
    ]
    :
    options = [
      "Semister-2nd", "Semister-3rd", "Semister-4th", "Semister-5th",
      "Semister-6th", "Semister-7th", "Semister-8th"
    ]

  return (
    <div className="container mt-3"
      style={{
        minHeight: "100vh",
        fontFamily: "unset"
      }}
    >
      <HashRouter>
        <h3 style={{fontFamily: "cursive", fontWeight: "bold"}}><u> {streamName} </u></h3>

        <Route path={`/semister/:streamName/:sem`} exact component={Subject} />
        <Route path={`/semister/:streamName/:sem/:subject`} exact component={BooksNotes} />
        <Route path={`/semister/:streamName/:sem/:subject/books`} exact component={Books} />
        <Route path={`/semister/:streamName/:sem/:subject/notes`} exact component={Notes} />
                
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-light"
            style={{
              background: "linear-gradient(#800080,#1a001a)",
              fontWeight: "bold"
            }}
          >Semister</li>
          {
            options.map((value, index) => (
                <NavLink exact to={`/semister/${streamName}/${value}`} key={index} 
                  style={{
                    textDecoration: "none",
                    padding: "5px 0px 10px 15px",
                    marginBottom: "2px",
                    marginTop: "1px",
                    color: "black",
                    borderBottom: '1px solid #660066',
                    borderLeft: "1px solid #660066",
                    borderRight: "1px solid #660066",
                    borderStyle: "ridge"
                  }}
                >
                  {value}
                  
                </NavLink>
                // <Route to={`/subject/:sem`}  component={Subject} />
            ))
          }
         
        </ul>

      </HashRouter>
    </div>
  )
}

