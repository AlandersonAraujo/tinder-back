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

      loggedDev.dislikes.push(targetDev._id);

      await loggedDev.save();

     return res.json(loggedDev);

   }
};