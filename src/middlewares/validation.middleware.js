import Joi from 'joi';

const schema = {
    createPost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string())
    }),
    addComment: Joi.object({
        content: Joi.string().required()
    }),
    updatePost: Joi.object({
        title: Joi.string(),
        content: Joi.string(),
        tags: Joi.array().items(Joi.string())
    }),
    getPostsByPeriod: Joi.object({
        dateFrom: Joi.date().required(),
        dateTo: Joi.date().required()
    })
}