import React from 'react'
import './infocontent.scss'

export const InfoContent: React.FC = () => {

    return (
        <div className="content-container">
            <div className="content-intro-message-container">
            <div className="sub-content-container">
                <p className="info-header"> Who we are </p>
                <p className="info-message">
                A group of intermediate to advanced players gathers weekly 
                to play Bridge in a relaxed, social atmosphere. We’ll bring the cards and will be in the back. Partnerships welcome but not required. We will break partnerships up, at least temporarily, if we don’t have a full table to allow everyone a chance to play and to keep wait time to a minimum.
                Most of us use the standard ACBL yellow card bidding convention as a baseline. 
                </p>
            </div>
            <div className="sub-content-container">
                <p className="info-header"> Where we are </p>
                <p className="info-message">
                Panera Bread@Presidential Blvd, 3900 City Ave. Philadelphia, PA
                </p>
            </div>
            <div className="sub-content-container">
                <p className="info-header"> When we are </p>
                <p className="info-message">
                Saturday Mornings: 10AM-1PM
                </p>
            </div>
            <div className="sub-content-container">
                <p className="info-header"> For more info contact </p>
                <p className="info-message">
                    Gary Dow, Connie Opfell or Margaret Wismer
                </p>
            </div>
            </div>
        </div>
    )
}