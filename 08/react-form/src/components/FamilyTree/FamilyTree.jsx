import React, { createContext, useState } from 'react';
import Grand from './Grand';
import './FamilyTree.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);

    const asset = 'diamond';
    return (
        <div className='family-tree'>
            <h2>family tree</h2>
            <p>Total: {money}</p>

            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={asset}>
                    {/* where we have access */}
                    <Grand></Grand>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;