import React, { useState } from 'react';

interface JourneyFormProps {
    onCalculate: (postcodes: string[]) => void;
}

const JourneyForm: React.FC<JourneyFormProps> = ({ onCalculate }) => {
    const [startPostcode, setStartPostcode] = useState('');
    const [endPostcode, setEndPostcode] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate([startPostcode, endPostcode]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Postcode 1:</label>
                <input
                    type="text"
                    value={startPostcode}
                    onChange={(e) => setStartPostcode(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Postcode 2:</label>
                <input
                    type="text"
                    value={endPostcode}
                    onChange={(e) => setEndPostcode(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Calculate Journey</button>
        </form>
    );
};

export default JourneyForm;
