//validation
const joi = require("@hapi/joi");




const register_validation = data =>{
    const schema = joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required(),
        avatar:  joi.string(),
        areaOFexpertise:  joi.string().min(6)
    });

    return schema.validate(data);

};



const login_validation = data =>{
    const   schema = joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    });

    return schema.validate(data);
};

const sheet_validation = data =>{
    const   schema = joi.object({
      
        title: joi.string().min(3).required(),
        description: joi.string().min(3).required(),
        tags: joi.string().min(3).required(),
        path: joi.string().min(3).required(),
        
    });

    return schema.validate(data);
}

    



module.exports.login = login_validation;
module.exports.register = register_validation;
module.exports.uploadedSheet = sheet_validation;