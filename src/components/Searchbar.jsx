import React from 'react';

const Searchbar = () => {
	    return (
		<div>
		
		      <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            
            <input type="text" className="form-control" placeholder="Product Name"/>
         </div>
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <button className="btn btn-info">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>

		</div>
	)
}
export default Searchbar
