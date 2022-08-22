import mongoose from "mongoose";

const connectToDatabase = () => {
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('mongodb conectado com sucesso!'))
      .catch((err) => console.log(`Alguma coisa deu arreado, banco nã conectado: ${err}`));
  };
  
  export default connectToDatabase;
