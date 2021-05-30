import React from "react"
import { Route, useParams } from "react-router"
import { HashRouter, NavLink } from "react-router-dom"
import { BooksNotes } from "./booksNotes"


export function Subject() {
  const { streamName, sem } = useParams()
  let options = [
    "Subject-1", "Automata", "Databse"
  ]

  return (
    <HashRouter>
      <div className="mt-3 pl-3 mb-3"
        style={{
          fontFamily: "unset"
        }}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-light"
            style={{
              background: "linear-gradient(#ffffff,#800080,#000000)",
              fontWeight: "bold"
            }}
          >{sem} Subjects</li>
          {
            options.map((value, index) => (
              <NavLink key={index} exact to={`/semister/${streamName}/${sem}/${value}`}
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
            ))
          }
        </ul>
      </div>
    </HashRouter>
  )
}