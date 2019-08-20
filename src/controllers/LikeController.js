const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){ 
    const { user } = req.headers;
    const { devId } = req.params; 

      //Colhendo os usuário 
      const loggedDev = await Dev.findById(user);
      const targetDev = await Dev.findById(devId);
      //Verificando se o usuário existe
      if (!targetDev){
        return res.status(400).json({ erro: 'Dev não existe' });
      }
     
       // Verificando se deu match
      if (targetDev.likes.includes(loggedDev._id)){
        console.log('Deu Match');
      }

      loggedDev.likes.push(targetDev._id);

      await loggedDev.save();

     return res.json(loggedDev);

   }
};