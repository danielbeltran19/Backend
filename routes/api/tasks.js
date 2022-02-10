const res = require('express/lib/response');
const router = require('express').Router();

const  {Tasks}  = require('../../db/database')

router.get('/', async(req, res)=>{
    const tasks = await Tasks.findAll();
    res.json(tasks);
});

router.post('/', async(req, res)=>{
    const task = await Tasks.create(req.body);
    res.json(task);
});

router.put('/:tasksId', async(req, res)=>{
    await Tasks.update(req.body, {
        where: { id: req.params.tasksId }
    });
    res.json({sucess: 'Se ha modificado'});
});

router.delete('/:tasksId', async(req, res)=>{
    await Tasks.destroy({
        where: { id: req.params.tasksId }
    });
    res.json({sucess: 'Se ha Borrado corrrectamente'});
});

module.exports = router;