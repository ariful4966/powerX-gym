import React from 'react';

const MemberShipPrograss = () => {
    return (
        <div className="memberCreation_heading mb-5">
            <ol className="timeline">
                <li className="timeline__step done">
                    <input className="timeline__step-radio" id="trigger1{{identifier}}" name="trigger{{identifier}}" type="radio" />
                    <span className="timeline__step-title">
                        Personal Information</span>
                    <i className="timeline__step-marker">1</i>
                </li>
                <li className="timeline__step done">
                    <input className="timeline__step-radio" id="trigger2{{identifier}}" name="trigger{{identifier}}" type="radio" />

                    <span className="timeline__step-title">
                        Bank Payment</span>

                    <i className="timeline__step-marker">2</i>
                </li>
                <li className="timeline__step">
                    <input className="timeline__step-radio" id="trigger3{{identifier}}" name="trigger{{identifier}}" type="radio" />
                    <span className="timeline__step-title">
                        Membership Created</span>
                    <i className="timeline__step-marker">3</i>
                </li>
            </ol>

        </div>
    );
};

export default MemberShipPrograss;