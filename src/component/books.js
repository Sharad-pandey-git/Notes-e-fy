import React from "react"
import { useParams } from "react-router"

export function _Books() {
  return (
    <div className="container d-flex text-white text-center">
      <div className="card" style={{ width: '18rem', background: "linear-gradient(#ffffff, #b300b3, #000000)" }}>
        <img src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
  )
}

export function Books() {
  const {streamName, sem , subject} = useParams();
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h3 className="fw-light mb-2" style={{ fontFamily: "fantasy" }}><u> {sem} </u></h3>
            <h4 className="fw-light" style={{ fontFamily: "fantasy" }}>{subject} - Books</h4>
          </div>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <div className="col">
              <div className="card text-white"
              style={{ width: '18rem', background: "linear-gradient(#ffffff, #b300b3, #000000)" }}
              >
                <img src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" className="bd-placeholder-img card-img-top" width="100%" height={225} />
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title ">Book Name</h5>
                  <a href="#" className="btn btn-sm btn-primary d-flex align-items-center">Download</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-white"
              style={{ width: '18rem', background: "linear-gradient(#ffffff, #b300b3, #000000)" }}
              >
                <img src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" className="bd-placeholder-img card-img-top" width="100%" height={225} />
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title ">Book Name</h5>
                  <a href="#" className="btn btn-sm btn-primary d-flex align-items-center">Download</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-white"
              style={{ width: '18rem', background: "linear-gradient(#ffffff, #b300b3, #000000)" }}
              >
                <img src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" className="bd-placeholder-img card-img-top" width="100%" height={225} />
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title ">Book Name</h5>
                  <a href="#" className="btn btn-sm btn-primary d-flex align-items-center">Download</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-white"
              style={{ width: '18rem', background: "linear-gradient(#ffffff, #b300b3, #000000)" }}
              >
                <img src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" className="bd-placeholder-img card-img-top" width="100%" height={225} />
                <div className="card-body d-flex justify-content-between">
                  <h5 className="card-title ">Book Name</h5>
                  <a href="#" className="btn btn-sm btn-primary d-flex align-items-center">Download</a>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </main>
  )
}