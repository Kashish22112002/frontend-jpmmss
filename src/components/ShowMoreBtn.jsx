import React from 'react'

const ShowMoreBtn = ({ onClick }) => {
  return (
    <button className="px-4 py-2 bg-green-800 text-orange-50 font-semibold rounded" onClick={onClick}>
        Show More
    </button>
  )
}

export default ShowMoreBtn