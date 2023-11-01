const fetch = require("node-fetch2");

it("Should say Riley",async ()=>{

    const response = await fetch('http://localhost:3000/riley');

    const name = await response.text();
    const status = response.status

    expect(status).toBe(200)
    expect(name).toBe("Hello Riley");

})