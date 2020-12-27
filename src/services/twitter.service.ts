import Twitter from 'twitter-lite';

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY ?? '',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET ?? '',
    access_token_key: process.env.ACCESS_TOKEN_KEY ?? '',
    access_token_secret: process.env.ACCESS_TOKEN_SECRET ?? '',
    version: '2.0',
});

export async function getHomeFeed() {
    const response = await client.get('statuses/home_timeline');
    console.log(response);
}

export function testFunction2() {}
