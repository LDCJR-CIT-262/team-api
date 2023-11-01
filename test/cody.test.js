const fetch = require("node-fetch2");

it("Should say Cody",async ()=>{

    const response = await fetch('http://localhost:3000/Cody');

    const name = await response.text();
    const status = response.status

    expect(status).toBe(200)
    expect(name).toBe("Hello Cody");

})