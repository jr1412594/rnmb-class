export default function Select({ 
    characters,
    handleChange
    }) {
    console.log('this is the select',characters)

    const locations = () => {
        let fullList = characters.map(character => {
            return character.origin.name 
        })

        const uniqList = [...new Set(fullList)]

        return uniqList.map(location => {
            return <option>{ location }</option>
        })
    }

    return (
        <div>
            <lable>Select Location: </lable>
            <select onChange={ handleChange } name='dropDown'>
                <option>Select</option>
                {locations()}
            </select>
        </div>
    )
}