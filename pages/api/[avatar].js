export default async function handler(req, res) {
    try {
        const { avatar, size } = req.query; // extract the dynamic part of the URL
        const format = avatar.split('.').pop(); // extract the file extension

        if (!['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(format)) {
            return res.status(400).json({ error: 'Unsupported file format' });
        }

        // fetch user data from Lanyard
        const lanyardResponse = await fetch('https://api.lanyard.rest/v1/users/308440976723148800', {
            method: 'GET',
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const lanyardData = await lanyardResponse.json();

        // construct the image URL
        const imageUrl = `https://cdn.discordapp.com/avatars/${lanyardData.data.discord_user.id}/${lanyardData.data.discord_user.avatar}.${format}${size ? `?size=${size}` : ''}`;

        // fetch the image data
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.buffer();

        // set the content type and send the image buffer
        res.setHeader('Content-Type', `image/${format}`);
        res.send(imageBuffer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}