import webpack from 'reshow-app/webpack.server';
const __dirname = new URL('.', import.meta.url).pathname;
export default webpack(__dirname);
