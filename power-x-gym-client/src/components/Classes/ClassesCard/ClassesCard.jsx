import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useRouteMatch } from 'react-router';
import './ClassesCard.css'

const ClassesCard = ({ classe }) => {
    const history = useHistory();
    const { url } = useRouteMatch()
    const handleUrl = (id) => {
        history.push(`${url}/${id}`)
    }
    console.log(classe);
    return (
        <Card>
            <Card.Img variant="top" src={classe.picture} style={{ height: '400px' }} />
            <Button className="brand_bg" onClick={() => handleUrl(classe._id)}><span>{classe.name}</span><FontAwesomeIcon icon={faArrowRight} /></Button>
        </Card>
    );
};

export default ClassesCard;