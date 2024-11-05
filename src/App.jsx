import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <>
      <div className="container-fluid vh-100 postion-relative">
       <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container">
        <a class="navbar-brand" href="#">E-Shop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      <div className="row h-100">
        <div className="col-12 col-sm-2 border-end">
          <div className="d-flex flex-wrap w-100">
            <div className="col-12">Mens</div>
            <div className="col-12">Womens</div>
          </div>
        </div>
        <div className="col-12 col-sm-10">
          <section className="p-5">
            <div className="sectionTitle bebas-Neue">Popular Products</div>
          </section>
        </div>

      </div>

    </div>


    </>
  )
}

export default App
