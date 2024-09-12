const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Ganti dengan SID dan Auth Token Twilio Anda
const accountSid = 'AC6c878fbbc4c5ce987833683bd3cea1af';
const authToken = '81313de291e70024d9c897107ebd8ff9';
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/send-message', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ success: false, message: 'Pesan tidak boleh kosong.' });
    }

    client.messages.create({
        body: message,
        from: 'whatsapp:+12678434728',
        to: 'whatsapp:+6285757572590',
    })
    .then(() => res.json({ success: true }))
    .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Gagal mengirim pesan.' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
