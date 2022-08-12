// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch('https://api.lanyard.rest/v1/users/308440976723148800', {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0',
    }
  }).then(response => response.json()).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' })
  });
}
