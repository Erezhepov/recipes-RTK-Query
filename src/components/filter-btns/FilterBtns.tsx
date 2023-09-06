import React, {FC} from 'react';

interface IFilterItem {
    filterItem: (value: string) => void
}
const FilterBtns: FC<IFilterItem> = ({filterItem}) => {
    return (
        <div className={'filter-btns'}>
            <button onClick={() => filterItem('')}>All</button>
            <button onClick={() => filterItem('breakfast')}>Breakfast</button>
            <button onClick={() => filterItem('dinner or lunch')}>Lunch & Dinner</button>
        </div>
    );
};

export default FilterBtns;