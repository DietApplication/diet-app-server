/**
 * Middleware that validates coming request and matches it to provided schema
 * @param schema schema of request
 * @returns Sends a response with status 404 and error in case of failure
 */
export default (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};
