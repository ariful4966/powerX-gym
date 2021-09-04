import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { classesData } from '../../Classes/ViewClasses/classesData';
import Header from '../../Share/Header/Header';
import ClassContent from '../ClassContent/ClassContent';


const ClassDetails = () => {
    const { clsId } = useParams();
    const [classDetails, setClassDetails] = useState({});
    useEffect(() => {
        const data = classesData;
        const selectedData = data.find(item => item.id == clsId);
        setClassDetails(selectedData)
    }, [classDetails]);
    console.log(classDetails);
    return (
        <div>
            <Header title={classDetails.name} />
            <ClassContent classe={classDetails} />
        </div>
    );
};

export default ClassDetails;