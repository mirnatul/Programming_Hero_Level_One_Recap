import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Bou = () => {
    const data = useContext(AssetContext)
    return (
        <div>
            <h5>Bou: {data}</h5>
        </div>
    );
};

export default Bou;