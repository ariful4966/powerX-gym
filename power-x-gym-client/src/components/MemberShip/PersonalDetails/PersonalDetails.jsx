import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const PersonalDetails = ({ member, setMember }) => {
    const handlePersonNext = (e) => {
        e.preventDefault();
        setMember({ ...member, isCard: true })
    }
    console.log(member);
    return (
        <div className="personal_detail_area">
            <Form className="row">
                <Form.Group className="mb-3 col-md-6" controlId="formGroupFirstName">
                    <Form.Label>Frist Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupBarth">
                    <Form.Label>Date Of Barth</Form.Label>
                    <Form.Control type="date" placeholder="date" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="male">Male</option>
                        <option value="femail">Femail</option>
                        <option value="other">Others</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Type Your Address" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupBarth">
                    <Form.Label>Country/Region</Form.Label>
                    <Form.Control type="text" placeholder="country" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder=" Your City Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupBarth">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control type="text" placeholder="country" />
                </Form.Group>
                <div className=" w-100 d-flex">
                    <Button onClick={handlePersonNext} className="brand_bg ms-auto" type="submit">
                        Next
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PersonalDetails;