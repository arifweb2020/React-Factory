import React from 'react';
import Skeleton from 'react-loading-skeleton'

function CardSkeleton(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <Skeleton width={354} height={354} />
                <div className="card-body">
                    <h4 className="card-title"><Skeleton /></h4>
                    <p className="card-text"><Skeleton /></p>
                </div>
            </div>
        </div>
    );
}

export default CardSkeleton;