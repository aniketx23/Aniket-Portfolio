
import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-3xl mx-auto">
                {EDUCATION_DATA.map((edu, index) => (
                    <div key={index} className="bg-secondary p-6 rounded-lg border border-border shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-accent">{edu.university}</h3>
                        <p className="text-lg text-text-primary mt-1">{edu.degree} in {edu.field}</p>
                        <p className="text-md text-text-secondary mt-2">{edu.period} • {edu.location}</p>
                        <p className="text-md text-text-secondary font-bold mt-1">{edu.cgpa}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
