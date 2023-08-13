const Waifus =require('../models/waifus')

exports.getAllWaifus=async (req,res)=>{
    try{
        const waifus= await Waifus.find({},'name descripcion')
        res.json(waifus)
    }catch{
        res.status(500).json({ error: 'Error fetching waifus from the database' });
    }
}

exports.createWaifus=async(req,res)=>{
    try{
        let newWaifus=new Waifus({
            name: req.body.name,
            descripcion: req.body.descripcion,
        })
        await newWaifus.save()
        res.redirect('/api/waifus');
    
    }catch{
        res.status(500).json({ error: 'any kind of error' });
    }    
}
