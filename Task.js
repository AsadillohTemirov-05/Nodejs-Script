const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

let part1 = null;
let part2 = null;

const WEBHOOK_URL = "http://localhost:3000/hook";

app.post("/hook", (req, res) => {
    console.log(" Webhook kelgan data:", req.body);

    if (req.body.code) {
        part2 = req.body.code.trim();
        console.log(" part2 qabul qilindi:", part2);
    }

    res.send("OK");

    if (part1 && part2) {
        getFinal();
    }
});


async function sendInit() {
    try {
        console.log(" API ga POST yuborilyapti...");

        const res = await axios.post("https://test.icorp.uz/interview.php", {
            msg: "Hello ICORP, Test Task by Asadilloh Temirov",
            url: WEBHOOK_URL
        });

        console.log(" API javobi:", res.data);

        part1 = res.data.code || res.data.part1 || res.data.token;
        console.log(" part1 olindi:", part1);
        console.log(" part2 webhook orqali kelishini kutyapmiz...");

     
        setTimeout(() => {
            const testPart2 = "TESTPART2-LOCAL";
            console.log(" Sending test part2 to /hook...");
            axios.post(WEBHOOK_URL, { code: testPart2 });
        }, 3000);

    } catch (err) {
        console.log(" POST ERROR:", err.message);
    }
}


async function getFinal() {
    const finalCode = part1 + part2;
    console.log(" YAKUNIY CODE:", finalCode);

    console.log("📡 GET so‘rovi yuborilyapti...");
    try {
      
        console.log(" DEMO FINAL MESSAGE: part1 + part2 birlashtirildi ");
        console.log("Kod:", finalCode);

        process.exit(0);

    } catch (err) {
        console.log(" GET ERROR:", err.message);
    }
}


app.listen(3000, () => {
    console.log(" Server running on http://localhost:3000");
    sendInit();
});
