import quote from './_quote.js'

const contents = JSON.stringify(quote.map(q => {
    return {
        header: q.header,
        subheader: q.subheader,
        describe: q.describe,
        link: q.link,
        image: q.image
    }
}))
export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(contents)
}