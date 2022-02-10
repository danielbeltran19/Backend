const router = require('express').Router();
const {validationResult, check} =  require("express-validator");


router.post('/amoniacal', [
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
            detail: detail.toFixed(3)
        }
    );
})

module.exports = router;