export const login = async (req, res) => {
  const {password} = req.body;

  try {
    if (password === process.env.ADMIN_PASSWORD){
      res.json({
        token: process.env.ADMIN_TOKEN
      });
    }
    else{
      res.status(401).json({ 
        status : false,
        message: 'Mot de passe incorrect' 
      });
    }

  } catch (err) {
    res.status(500).json({ 
      status : false,
      message: 'Une erreur est survenue. Veuillez réésayer'
  })
};
}
