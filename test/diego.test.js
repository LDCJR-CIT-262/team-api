const fetch = require("node-fetch2");

it("Should say Diego",async ()=>{

    const response = await fetch('http://localhost:3000/Diego');

    const name = await response.text();

    expect(name).toBe("Hello Diego");

})