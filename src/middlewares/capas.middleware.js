import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  next();
};

export const validObjectBody = (req, res, next) => {
  let capa = req.body;

  if (
    !capa ||
    !capa.artista ||
    !capa.album ||
    !capa.ano ||
    !capa.fotoUrl ||
    !capa.descricao
  ) {
    return res.status(400).send({ message: 'Você não preencheu todos os dados para adicionar uma nova capa!' });
  }

  next();
};
