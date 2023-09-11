import { getAllFilms } from "@/actions/getAllFilms"
import Link from "next/link"

const Films = async () => {
    const allFilms = await getAllFilms()
    return (
        <div className="container mx-auto mt-4 text-gray-900">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Films list:
            </h2>
            <ul>
                {allFilms.result.map(film => {
                    return (
                        <li key={film.uid}>
                            <Link href={`/films/${film.uid}`}>
                                {film.properties.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Films