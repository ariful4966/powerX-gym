import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CreditCard, { stripePromise } from '../CreditCard/CreditCard';
import MemberShipPrograss from '../MemberShipPrograss/MemberShipPrograss';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './MemberCreate.css'

const MemberCreate = () => {
    const [member, setMember] = useState({
        isPerson: true,
        isCard: false,
        isCertificate: false,
    });

    return (
        <section className="memberCreate_area my-5">
            <MemberShipPrograss />
            <Container>
                {

                    (member.isCard && member.isPerson &&
                        <PaymentMethod/>
                        ) ||
                    (member.isPerson && <PersonalDetails member={member} setMember={setMember} />)
                }
            </Container>
        </section>
    );
};

export default MemberCreate;