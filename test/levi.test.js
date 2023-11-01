const fetch = require("node-fetch2");

it("Should say Levi",async ()=>{

    const response = await fetch('http://localhost:3000/levi');

    const name = await response.text();
    const status = response.status

    expect(status).toBe(200)
    expect(name).toBe("sean");

})