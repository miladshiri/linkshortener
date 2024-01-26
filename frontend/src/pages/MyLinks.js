import React from 'react'

const MyLinks = () => {
  return (
    <div className="container-sm mt-5">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>First Link</div>
                <div className="btn btn-danger">delete</div>
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul>
    </div>
  )
}

export default MyLinks