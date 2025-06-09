import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-white py-4 mt-auto">
      <div className="container text-center">
        <p  className="mb-0">&copy; {new Date().getFullYear()} Asterisk. All rights reserved.</p>
        <div>
          <div>Developed by <a target='_blank' href='https://prashant-1342.github.io/My-Profile/' style={{color:'blueviolet',textDecoration:'none'}}>Prashant</a> </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
