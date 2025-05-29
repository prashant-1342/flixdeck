import React from 'react'

const GenreHistory = () => {
  return (
    <div className='pagescontainer2'>
      <h2 className='heading2'>History</h2>

      <div className="container mt-3">
  <div className="row">
    {Array.from({ length: 13 }).map((_, index) => (
      <div className="col-6 col-md-2 mb-4 con" key={index}>
        <div className="card movie-card h-100 text-white">
          <img
            src="/yFHHfHcUgGAxziP1C3lLt0q2T4s.webp"
            className="card-img-top"
            alt="A Minecraft Movie"
          />
          <div className="card-body p-2">
            <h6 className="card-title mb-1">A MineCraft Movie</h6>
            <p className="card-text mb-0" style={{ fontSize: '0.8rem' }}>
              27 May 2025
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default GenreHistory
