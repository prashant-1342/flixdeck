import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-white py-4 mt-auto">
      <div className="container text-center">
        <p  className="mb-0">&copy; {new Date().getFullYear()} FlixDeck. All rights reserved.</p>
        <div>
          <div>Developed by <a target='_blank' href='https://www.linkedin.com/in/prashantpal11/' style={{color:'blueviolet',textDecoration:'none'}}>Prashant</a> </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
