
import React, { useState } from 'react'
import { Button, Input, SearchField } from "./elements/Elements";


function Search({ searchText }) {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <SearchField>
                    <Input onChange={e => setText(e.target.value)}
                        type="text"
                        placeholder="Search..."></Input>
                    <Button
                        type="submit">Search</Button>
                </SearchField>
            </form>
        </div>
    )
}

export default Search