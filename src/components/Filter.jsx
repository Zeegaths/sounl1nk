import React from 'react'

function FilterComp() {
  return (
    <div className='filter-card'>
        <div className='filter-header flx'>
            <p className="filter-text">Filter</p>
            <img src="./black-check-icon.svg" alt="" />
        </div>
        <hr className="small-rule" />
        <div className="filter-actions-ctn">
            <div className="action flx">
              <p className="small-gray-text">Date joined</p>
              <img src="./r-arrow.svg" alt="" />
            </div>
            <div className="action flx">
              <p className="small-gray-text">Alphabetical</p>
              <img src="./r-arrow.svg" alt="" />
            </div>
            <div className="action flx">
              <p className="small-gray-text">Reverse alphabetical</p>
              <img src="./filter3.svg" alt="" />
            </div>
            <div className="action flx">
              <p className="small-gray-text">Created date - Ascending</p>
              <img src="./filter4.svg" alt="" />
            </div>
            <div className="action flx">
              <p className="small-gray-text">Created date - Descending</p>
              <img src="./filter5.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default FilterComp