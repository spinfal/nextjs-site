// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  fetch('https://api.lanyard.rest/v1/users/308440976723148800', {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0',
    }
  }).then(response => response.json()).then(async data => {
    res.redirect(`https://cdn.discordapp.com/avatars/${ data.data.discord_user.id }/${ data.data.discord_user.avatar }.${ data.data.discord_user.avatar.substring(0, 2) === 'a_' ? 'gif' : 'png' }${ req.query.size ? `?size=${ req.query.size }` : '' }`);
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    res.end();
  });
}
