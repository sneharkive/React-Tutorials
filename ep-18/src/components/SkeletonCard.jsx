import React from 'react'
import Skeleton from './Skeleton'

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
      </div>
  )
}

export default SkeletonCard