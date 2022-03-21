const arrayRouters = [];
const context = require.context('.', true, /router\.js$/);
arrayRouters.push(...context.keys().map(path => context(`${path}`).default));
export default arrayRouters;