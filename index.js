require('dotenv').config();
const express = require("express");
const cors = require('cors')
const rootRouter = require('./routes/index')
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors({
     origin:["https://pay-tm-vksr-vamshichis-projects.vercel.app"],
     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/v1',rootRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
