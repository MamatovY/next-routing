export function getAllFilms(): Promise<FilmsResponse> {
    //cache: 'no-store' //SSR - getServerSideProps
    //cache: 'force-cache' //SSG - getStaticProps
    //next:{ revalidate:60 } // ISR - getStaticProps and revalidate 60s
    return fetch('https://swapi.tech/api/films').then(res => res.json())
}
