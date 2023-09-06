import React, {ChangeEvent, FC, useState} from 'react';

interface ISearchItem {
    findItem: (value: string) => void
}

const SearchItem: FC<ISearchItem> = ({findItem}) => {
    const [value, setValue] = useState('')
    const changeValueHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setValue(e.target.value)
        findItem(e.target.value)
    }
    return (
        <div className={'search-query'}>
            <input type="search" onChange={changeValueHandler} value={value}/>
        </div>
    );
};

export default SearchItem;