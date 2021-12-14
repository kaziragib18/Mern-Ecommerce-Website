module.exports = (aysncFunc) => (req, res, next) => {
  Promise.resolve(aysncFunc(req, res, next)).catch(next);
};