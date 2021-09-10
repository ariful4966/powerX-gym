import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { classesData } from '../../Classes/ViewClasses/classesData';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import ClassContent from '../ClassContent/ClassContent';


const ClassDetails = () => {
    const classes = useSelector(state => state.dataReducer.classes)
    const [classItem, setClassItem] = useState({})
    const { clsId } = useParams();

    useEffect(() => {
        const classData = classes.find(single => single._id == clsId);
        setClassItem(classData)
    }, [clsId])

    return (
        <div>
            <Header title={classItem.name} />
            <ClassContent classe={classItem} />
            <Footer />
        </div>
    );
};

export default ClassDetails;