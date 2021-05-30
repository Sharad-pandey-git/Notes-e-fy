import React from "react"
import { useParams } from "react-router"

export function Notes() {
  const { streamName, sem, subject } = useParams();
  let options = ["unit-1", "unit-2", "unit-3", "unit-4"]
  return (
    <ul className="list-group list-group-flush my-4">
      <li className="list-group-item bg-dark text-white"
        style={{
          fontWeight: "bold"
        }}
      >{sem}</li>
      <li className="list-group-item text-light bg-primary"
        style={{
          fontWeight: "bold"
        }}
      >{subject} Notes</li>
      {
        options.map((value, index) => (
          <a href="#" key={index}
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
            {value.toUpperCase()} - <button className="btn btn-sm btn-success">Download</button>
          </a>
          
        ))
      }

    </ul>
  )
}