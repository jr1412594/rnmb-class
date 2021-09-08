export default function CharacterCard({ character }) {

    return (
        <div className='card-div'>
            <h1 className='character-name'>{ character.name }</h1>
            <img 
                className='character-image'
                src={ character.image}
                alt={ character.id }
            />
            <h2 className='character-species'>{ character.species }</h2>
            <h2>{ character.origin.name }</h2>
            <h2>{ character.status }</h2>
        </div>
    )
}