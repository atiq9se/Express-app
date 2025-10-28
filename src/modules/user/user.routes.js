const path       = require("path");
const express    = require('express');
const router     = express.Router();
const controller = require('./user.controller');
const validate   = require(path.join(process.cwd(), 'src/modules/core/middlewares/validate'));
const { userRegisterSchema } = require("./user.schema");


module.exports = app =>{
    app.route("/api/users")
       .get(controller.getUsers)
       .post(validate(userRegisterSchema), controller.createUser);
    
    app.route("/api/users/:id")
       .get(controller.getUser)
       .put(controller.putUser)
       .patch(controller.patchUser)
       .delete(controller.deleteUser);
}

// router.get("/api/users", controller.getUsers);
// router.get("/api/users/:id", controller.getUser);
// router.post("/api/users", validate(userRegisterSchema), controller.createUser);
// router.put("/api/users/:id", controller.putUser);
// router.patch("/api/users/:id", controller.patchUser);
// router.delete("/api/users/:id", controller.deleteUser);
 
// module.exports = router; 