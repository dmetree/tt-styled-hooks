
import React, { useState } from 'react'
import { Button, Input, SearchField } from "./elements/Elements";


function Search({ searchText }) {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="">
            <form onSubmit={onSubmit} className="">
                <SearchField className="">
                    <Input onChange={e => setText(e.target.value)}
                        className=""
                        type="text"
                        placeholder="Search..."></Input>
                    <Button
                        className=""
                        type="submit">Search</Button>
                </SearchField>
            </form>
        </div>
    )
}

export default Search