import React from 'react'

const Search = ({keyword, setKeyword}) => {

    const handleSearch = (e) => {
        e.preventDefault()
        setKeyword(e.target.value.toLowerCase());
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <input
                    type="search"
                    placeholder="Search keyword"
                    value={keyword}
                    onChange={handleSearch}
                    className="form-control mb-4"
                />
            </div>
        </div>
    )
}

export default Search