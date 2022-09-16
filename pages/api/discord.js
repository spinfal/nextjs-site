// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const allowedDomains = [
  'https://spin.rip/',
  'https://www.spin.rip/',
  'http://localhost:3000/',
];

export default function handler(req, res) {
  if (allowedDomains.indexOf(req.headers.referer) === -1) return res.status(418).send('i\'m a smol teapot.');

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
    res.status(500).json({error: 'Internal Server Error'});
    res.end();
  });
}
