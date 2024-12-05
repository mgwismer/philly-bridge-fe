import React from 'react'
import './infocontent.scss'

export const InfoContent: React.FC = () => {

    return (
        <div className="content-container">
            <div className="content-intro-message-container">
            <div className="sub-content-container">
                <p className="info-header-welcome"> Hi, you found us! Welcome to Philly Bridge Players </p>
                <p className="info-header"> WHO WE ARE </p>
                <p className="info-message">
                    We are a group of bridge players who meet weekly to play and improve our games. Mostly
                    we have fun and enjoy each other's company
                </p>
            </div>
            <div className="sub-content-container">
                <p className="info-header-describe"> You might consider joining us if you are </p>
                <ul>
                    <li> An intermediate player interested in meeting new players </li>
                    <li> A duplicate pair interested in practicing without paying card fees </li>
                </ul>
                <p className="info-header"> WHERE </p>
                <p className="info-message">
                You can join us as a pair or as a single player
                <br/>
                We are not able to accommodate beginners but, if you are a new player, taking lessons with
                a partner, we would be happy for you to try our group.
                </p>

            </div>
            <div className="sub-content-container">
              <p className="info-message">
                Where: Panera Bread@Presidential Blvd, 3900 City Ave. Philadelphia, PA
                </p>
                <p className="info-header"> WHEN </p>
                <p className="info-message">
                When: Saturday Mornings: 10AM-1PM
                </p>
            </div>
            <div className="sub-content-container">
                <p className="info-header"> COST </p>
                <p className="info-message">
                   There is no cost to play with us a few times. If you decide to join us more regularly there is
                   a modest annual fee.
                </p>
            </div>
            <div className="sub-content-container">
                <p className="info-header"> NEXT </p>
                <p className="info-message">
                    If you would like to come play or would like more information email us at
                    phillypartybridge@gmail.com.
                </p>
            </div>
            </div>
        </div>
    )
}