import React from 'react'

function AllReviews(props) {
    return (
        <div>            
            <button type="button" onClick={props.onAllReviews}>View All Reviews</button>
        </div>
        
    );
}

export default AllReviews