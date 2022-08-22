import Capa from '../models/Capas.js';

 const CapaLista = async() => await Capa.find();
 const createCapa = async (newCapa) => await Capa.create(newCapa);
 const capaById = async (id) => await Capa.findById(id);
 const updateCapaById =  async (id, updatedCapa) => {
    return await Capa.findByIdAndUpdate(id, updatedCapa).setOptions({returnOriginal:false});    
};
 const deleteCapaById = async (id) =>await Capa.findByIdAndDelete(id);

 export default {
    CapaLista,
    createCapa,
    capaById,
    updateCapaById,
    deleteCapaById,
 };
