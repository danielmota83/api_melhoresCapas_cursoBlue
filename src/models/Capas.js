import mongoose from 'mongoose';

const CapaSchema = new mongoose.Schema(
    {
        artista: { type: String, require: true },
        album: { type: String, require: true },
        ano: { type: Number, require: true },
        fotoUrl: { type: String, require: true },
        descricao: { type: String, require: true },
    }
);

const Capa = mongoose.model('Capa', CapaSchema, 'capas');

export default Capa;
