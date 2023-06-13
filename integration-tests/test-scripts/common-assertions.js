client.test("Request successful", () => {
    client.assert(response.status >= 200 && response.status < 400, `Response status: ${response.status}`)
})

client.test("Response is JSON", () => {
    client.assert(response.headers.valueOf("content-type") === 'application/json');
})

client.test("Response is not empty", () => {
    client.assert(!!response.body)
})
