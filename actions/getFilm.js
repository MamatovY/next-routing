export function getFilm(id) {
    //cache: 'no-store' //SSR - getServerSideProps
    //cache: 'force-cache' //SSG - getStaticProps
    //next:{ revalidate:60 } // ISR - getStaticProps and revalidate 60s
    return fetch(`https://swapi.tech/api/films/${id}`)
        .then(res => res.json())
}