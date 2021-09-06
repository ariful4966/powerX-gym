import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useRouteMatch } from 'react-router';
import './PricingPlanItem.css'

const PricingPlanItem = ({ pricingPlan }) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const priceBg = {
        background: "url(" + pricingPlan.picture + ")",
        backgroundPosition: 'center'

    }

    const handleMember = (id) => {
        history.push(`${url}/${id}`)
    }
    return (
        <Card className="text-center text-white p-4 price-bg" style={priceBg}>
            <Card.Header className="my-3">
                <Card.Title className="brand_color" as="h5" >{pricingPlan.time}</Card.Title>
                <Card.Title as="h2">{pricingPlan.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <ul className="mb-5">
                    {
                        pricingPlan.fetures.map((item, idx) =>
                            <li className="list-unstyled my-3" key={idx}><FontAwesomeIcon className="me-2" icon={faCheck} /> {item}</li>
                        )
                    }
                </ul>
                <div className="text-center"> <Button className="brand_bg px-5" onClick={() => handleMember(pricingPlan._id)}>Purcase</Button></div>
            </Card.Body>
        </Card>
    );
};

export default PricingPlanItem;