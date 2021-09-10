import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const PersonalDetails = ({ member, setMember, handleOrderPost }) => {
    const handlePersonInfo = (e) => {
        const newMember = { ...member }
        newMember[e.target.name] = e.target.value;
        setMember(newMember)
    }

    return (
        <div className="personal_detail_area">
            <Form className="row" onSubmit={handleOrderPost}>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupFirstName">
                    <Form.Label>Frist Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="firstName" onBlur={handlePersonInfo} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name="lastName"onBlur={handlePersonInfo} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" defaultValue={member.email} onBlur={handlePersonInfo}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone Number" name="phone" onBlur={handlePersonInfo}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupBarth">
                    <Form.Label>Date Of Barth</Form.Label>
                    <Form.Control type="date" placeholder="date" name="DoB" onBlur={handlePersonInfo}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" name="gender" onBlur={handlePersonInfo}>
                        <option value="male" selected >Male</option>
                        <option value="femail">Femail</option>
                        <option value="other">Others</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Type Your Address" name="address" onBlur={handlePersonInfo}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupBarth">
                    <Form.Label>Country/Region</Form.Label>
                    <Form.Control type="text" placeholder="country" name="country" onBlur={handlePersonInfo} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupMobile">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder=" Your City Name" name="city" onBlur={handlePersonInfo}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="formGroupBarth">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control type="number" min="4" placeholder="Post Code" name="postCode" onBlur={handlePersonInfo}/>
                </Form.Group>
                <div className=" w-100 d-flex">
                    <Button className="brand_bg ms-auto" type="submit">
                        Next
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PersonalDetails;