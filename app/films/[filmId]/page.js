import { getFilm } from "@/actions/getFilm"

const Film = async ({ params: { filmId } }) => {
    const film = await getFilm(filmId)
    return (
        <div >
            <h1>
                {film.result.properties.title}
            </h1>
        </div>
    )
}

export default Film