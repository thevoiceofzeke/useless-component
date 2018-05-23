const sass = require('@stencil/sass');

exports.config = {
  namespace: 'app',
  plugins: [
    sass()
  ],
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ],
  globalStyle: 'src/global/app.scss'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
