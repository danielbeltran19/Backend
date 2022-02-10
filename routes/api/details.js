const router = require('express').Router();
const  {Details}  = require('../../db/database')
let basicMath = require('advanced-calculator');
const {validationResult, check} =  require("express-validator");


router.get('/', async(req, res)=>{
    const details = await Details.findAll();
    res.json(details);
});


router.post('/', async(req, res)=>{
    const detail = await Details.create(req.body);
    res.json(detail)
})

router.post('/Calcular/amoniacal', [
    check("H5", "El valor de la variable H5 no es un valor numerico valido").isNumeric(),
    check("G5", "El valor de la variable G5 no es un valor numerico valido").isNumeric(),
    check("I5", "El valor de la variable I5 no es un valor numerico valido").isNumeric(),
    check("F5", "El valor de la variable F5 no es un valor numerico valido").isNumeric()
],
async(req, res)=>{
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errores: errors.array() })
        }
    const {
        H5,
        G5,
        I5,
        F5
    } = req.body;
    const detail = ((H5 - G5) * I5 * 14000) / F5;
    return res.json(
        {
            ok: true,
            detail
        }
    );
})


router.put('/:detailsId', async(req, res)=>{
    await Details.update(req.body, {
        where: { id: req.params.detailsId }
    })
    return res.json({sucess: 'Se han modificado los datos'});
});

router.delete('/:detailsId', async(req, res)=>{
    await Details.destroy({
        where: {id: req.params.tasksId }
    });
    res.json({sucess: 'Se ha Borrado corrrectamente'});
});


module.exports = router;
