const app = require("./app");
let items = require("./items");

let pretzels = {name: "pretzels", price: "2.99"}

beforeEach(function() {
    items.push(pretzels)
})

afterEach(function() {
    items.length = 0;
})

describe ("Get /item", () => {
    test("Gets all items", async () => {
        const res = await request(app).get('/items')
        expect(resp.statusCode).toBe(200);

        expect(resp.body).toEqual({ cats: [pretzels]})
    })
})