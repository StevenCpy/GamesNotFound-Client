function StoreGame( {gameName, gameVersion, author, coverImageName} ) {
    return (
        <div style={{
            "display":"flex",
            "flexDirection": "column"
        }}>
            <div>
                <img src={"/public/game-cover-images/" + coverImageName} alt={gameName} />
            </div>
            <div>
                <b>Name:</b> {gameName} | <b>Version: </b>{gameVersion} | <b>Author: </b>{author}
            </div>
            
            
        </div>
    )
}

export default StoreGame