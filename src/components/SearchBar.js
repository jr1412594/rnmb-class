import Select from "./Select"

export default function SearchBar({
    characters,
    handleChange
}) {
    return (
        <div className='searches'>
            <div>
                <label className='search-lable' name='for-search'>Enter Search: </label>
                <input 
                    className='search-input'
                    placeholder='Search' 
                    name='search'
                    onChange={ handleChange }
                />
            </div>
            <Select characters={ characters } handleChange={ handleChange }/>
        </div>
    )
}