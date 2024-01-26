import React from 'react'

const MainPage = () => {
  return (
    <div className="container-md mt-5">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Make Short!</button>
        </form>
        <div className="container-sm mt-5">
        <h2 className="fw-bold">Shorted Link: </h2> 
            <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage