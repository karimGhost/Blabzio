import { Link } from 'gatsby'
import React from 'react'

export default function About() {
  return (

    <div>
      
      <div className="content-wrapper">
        <div className="container">
          <Link to="/"><h1>Back To Home Page</h1></Link>
          <div className="row">
            <div className="col-sm-12">
              <div className="card" data-aos="fade-up">
                <div className="card-body">
                  <div className="aboutus-wrapper">
                    <h1 className="mt-5">
                      About Us
                    </h1>
                    <p className="font-weight-600 fs-15">
                    
                    </p>
                    <p className="font-weight-600 fs-15 mb-5 mt-4">
                    ZenaNews, provides News from various News leads which are 
                     Legit
                    </p>
                    <img
                      src="../assets/images/about/about.jpg"
                      alt="banner"
                      className="img-fluid mb-5"
                    />

                    <p className="font-weight-600 fs-15 text-center">
                 f his En Marche! movement.
                      For many, however, the campaign has become less about
                      backing Macron and instead about voting against Le Pen,
                      the Cational Front candidate.
                    </p>
                    <p className="font-weight-600 fs-15 mb-5 mt-4 text-center">
                      instead about voting against Le Pen,
                      the Xational Front candidate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}
