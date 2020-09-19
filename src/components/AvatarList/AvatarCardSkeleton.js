import React from 'react';
import Skeleton from 'react-loading-skeleton';

function AvatarCardSkeleton() {
  return (
    <>
      <div className="thumb-friend-image">
        <Skeleton className="skeleton" circle height={250} width={250} />
        <br />
        <br />
        <Skeleton height={50} />
      </div>
    </>
  );
}

export default AvatarCardSkeleton;
