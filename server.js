const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Rutas
const parentingDocRoutes = require('./server/routes/parenting-doc');
const parentingChatRoutes = require('./server/routes/parenting-chat');
const professionalRoutes = require('./server/routes/professionals');


app.use('/api/parenting-docs', parentingDocRoutes);
app.use('/api/parenting-chats', parentingChatRoutes);
app.use('/api/professionals', professionalRoutes);

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/dadlife', { useNewUrlParser: true })
    .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(3000, () => console.log('🚀 API corriendo en http://localhost:3000'));
    })
    .catch(err => console.log('❌ Error conectando a MongoDB:', err));

