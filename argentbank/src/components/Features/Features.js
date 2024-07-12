import React, { useEffect, useState } from "react";
import "./Style/features.scss"
import FeatureCard from "../FeatureCard/FeatureCard";
import axios from "axios";


const Features = () => {

    const [ features, setFeatures] = useState([]);



    const fetchFeatures = async () => {
        try{
            const response = await axios.get('/features.json')
            setFeatures(response.data)
        } catch(error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    }

    useEffect(() => {
        fetchFeatures();
    }, []);

    return (
        <div className="features">
            {features.map(feature =>(
                <FeatureCard
                key={feature.id}
                title={feature.title}
                text={feature.text}
                icon={feature.icon}
                />
            ))}

        </div>
        
    );
}

export default Features;
