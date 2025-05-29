import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Prashant Pal. All rights reserved.</p>
        <div>
          <a href="#" className="text-white me-3">
            Privacy Policy
          </a>
          <a href="#" className="text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
