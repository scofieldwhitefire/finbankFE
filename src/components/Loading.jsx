import React from 'react'

const Loading = () => {
  return (
    <>
    {/* <!-- Start preloader --> */}
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="f" className="letters-loading"> f </span>
              <span data-text-preloader="i" className="letters-loading"> i </span>
              <span data-text-preloader="n" className="letters-loading"> n </span>
              <span data-text-preloader="b" className="letters-loading"> b </span>
              <span data-text-preloader="a" className="letters-loading"> a </span>
              <span data-text-preloader="n" className="letters-loading"> N </span>
              <span data-text-preloader="k" className="letters-loading"> k </span>
              <span data-text-preloader="c" className="letters-loading"> c </span>
              <span data-text-preloader="u" className="letters-loading"> u </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End preloader --> */}
    </>
  )
}

export default Loading