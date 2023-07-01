import React from 'react'

function Carousal() {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
  <div className="carousel-caption" style={{zIndex:3}}>
  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
      </form>
  </div>
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/8616836/pexels-photo-8616836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}

export default Carousal