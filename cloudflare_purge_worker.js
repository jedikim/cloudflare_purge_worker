addEventListener('fetch', event => {
    const { request } = event
    event.respondWith(handleRequest(request))
})

async  function handleRequest(request) {
    const { headers } = request
    result = await request.json()
    const retBody = purgeFile(result)
    return retBody
}
function purgeFile( data = {}) {
    const response = fetch("https://api.cloudflare.com/client/v4/zones/your DNS zone ID/purge_cache", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'X-Auth-Email': 'Your Email address of ID',
            'X-Auth-Key' : 'Authentication Key',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response ; // parses JSON response into native JavaScript objects
}
