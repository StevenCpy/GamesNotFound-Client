import StoreGame from '../components/storeGame'
import games from '../data/games'

function Store() {
    return (
        <div>
            {games.games.map(game =>
                <StoreGame key={game.Id} gameName={game.gameName} gameVersion={game.gameVersion} author={game.author} />
            )}
        </div>
    )
}

export default Store