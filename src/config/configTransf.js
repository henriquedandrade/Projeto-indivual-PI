const multer = require('multer');
const crypto = require('crypto');

// Diretório onde os arquivos serão salvos
// ATENÇÃO: É necessário manter o diretório 'public' para poder utilizar no front-end

// Transferencias
const diretorio_transferencias = 'src/imagens_transferencias/';

 const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, diretorio_transferencias); // Define a pasta única para todas as imagens
  },
  
  filename: (req, file, cb) => {
    const extensaoArquivo = file.originalname.split('.')[1]; 
    const prefixoCampo = file.fieldname;
    const identificadorUnico = crypto.randomBytes(8).toString('hex'); 
    
    const novoNomeArquivo = `${prefixoCampo}_${identificadorUnico}.${extensaoArquivo}`;
    cb(null, novoNomeArquivo);
  }
});

module.exports = multer({ storage });