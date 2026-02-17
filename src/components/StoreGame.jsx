function StoreGame( {gameName, gameVersion, author} ) {
    return (
        <div>
            <b>Name:</b> {gameName} | <b>Version: </b>{gameVersion} | <b>Author: </b>{author}
        </div>
    )
}

export default StoreGame