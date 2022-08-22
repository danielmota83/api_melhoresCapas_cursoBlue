import capasService from '../service/capas.services.js';


 const CapaLista = async (req, res) => {
  const allCapas = await capasService.CapaLista();

  if (allCapas.length == 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhuma Capa cadastrada!' });
  }

  res.send(allCapas);
};

 const capaById = async (req, res) => {
  const id = req.params.id;

  const capa = await capasService.capaById(id);

  if (!capa) {
    res.status(206).send({ message: 'Nenhuma capa encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Capa encontrada com sucesso', capa });
  }
};

 const createCapa = async (req, res) => {
  const capa = req.body;

  const newCapa = await capasService.createCapa(capa);

  res.status(201).send(newCapa);
};

 const updateCapaById = async (req, res) => {
  const id = req.params.id;
  const capaEdit = req.body;

  const chosenCapa = await capasService.capaById(id);

  if (!chosenCapa) {
    return res.status(206).send({ message: 'Capa não encontrada!' });
  }

  const updatedCapa = await capasService.updateCapaById(id, capaEdit);

  res.send(updatedCapa);
};

 const deleteCapaById = async (req, res) => {
  const id = req.params.id;

  const chosenCapa = await capasService.capaById(id);

  if (!chosenCapa) {
    return res.status(206).send({ message: 'Capa não encontrada!' });
  }

  await capasService.deleteCapaById(id);

  return res.status(204).send({ message: 'Capa deletada!' });
};


export default{
  CapaLista,
  createCapa,
  capaById,
  updateCapaById,
  deleteCapaById,
};
