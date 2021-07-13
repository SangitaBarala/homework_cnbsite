import React from 'react'


const Navbar = () => {
   
    return (
        <div className="container">
        <h1>CNB NET</h1>
          <div className="dropdown">
              <button className="dropbtn">Vendors
                   <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <button className="dropbtn">CNB
                   <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                <div>Logout</div>
            </div>
        </div>
        )
}
export default Navbar