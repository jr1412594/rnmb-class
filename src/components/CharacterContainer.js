
import CharacterCard from "./CharacterCard"

export default function CharacterContainer({ characters }) {

    const displayCharacters = () => {
        return characters.map(character => {
            return <CharacterCard  character={ character } key={ character.id }/>
        })
    }

    return(
        <div className='container'>
            {/* <h1>This is the container</h1> */}
            { displayCharacters() }
        </div>
    )
}