import { faCity } from '@fortawesome/free-solid-svg-icons';
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getUserOrder } from '../../../redux/actions/dataAction';
import MemberShipPrograss from '../MemberShipPrograss/MemberShipPrograss';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './MemberCreate.css'

const MemberCreate = () => {
    const { mbrId } = useParams();
    const stateInfo = useSelector(state => state);
    const memberInfo = stateInfo.dataReducer.orders
    const userInfo = stateInfo.authReducer;


    const [member, setMember] = useState({

        firstName: '',
        lastName: '',
        email: userInfo.email || '',
        phone: '',
        DoB: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        postCode: '',
        PaymentMethodId: ''

    });
    member.productId = mbrId

    const [showBill, setShowBill] = useState({
        isPerson: false,
        isCard: false

    })



    const handleOrderPost = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(member)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                if (data) {
                    setShowBill({...showBill, isPerson: true})
                }
            }

            )

    }
    useEffect(() => {
 
        if (memberInfo.length > 0) {
            const extMember = memberInfo.find(mb => mb.productId === mbrId);
            if (extMember) {
                setShowBill({
                    ...showBill, isPerson: true
                })
            }
        }

    }, [ mbrId, memberInfo ])


    return (
        <section className="memberCreate_area my-5">
            <MemberShipPrograss />
            <Container>
                {

                    showBill.isPerson && <PaymentMethod />

                }{
                    showBill.isPerson === false && <PersonalDetails handleOrderPost={handleOrderPost} member={member} setMember={setMember} />
                }
            </Container>
        </section>
    );
};

export default MemberCreate;