import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h4>Brother</h4>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 taka</button>
        </div>
    );
};

export default Brother;