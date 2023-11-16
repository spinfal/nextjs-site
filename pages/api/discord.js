// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const allowedDomains = [
    'spin.rip',
    'www.spin.rip',
    'spinhome.replit.app',
    'my-site.clit.repl.co',
    'my-site--clit.repl.co',
    'd-ba9af8c3-ed37-4ec2-9462-406c6f0ca21b-2cptnrxs3q-uc.a.run.app',
    'development.spin.rip',
    'localhost:3000',
];

export default function handler(req, res) {
    // the Host header cannot be modified by the user sending a request (unless someone puts in lots of work, but this isn't that important lol)
    if (allowedDomains.indexOf(req.headers.host) === -1) return res.status(418).send(`domain not allowed: ${req.headers.host}`);

    fetch('https://api.lanyard.rest/v1/users/308440976723148800', {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0',
        }
    }).then(response => response.json()).then(data => {
        res.status(200).json(data);
        res.end();
    }).catch(err => {
        console.log(err);
        res.status(500).json(`An error has occurred: ${err}`);
        res.end();
    });
}

export const config = {
    api: {
        externalResolver: true,
        bodyParser: {
            sizeLimit: '0kb',
        },
    },
};
