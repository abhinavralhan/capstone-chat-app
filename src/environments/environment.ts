// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: 'AIzaSyDCW8xPJ6DBhTSdrB16qs8V9KKgrr1STzk',
    authDomain: 'chatapp-8031c.firebaseapp.com',
    databaseURL: 'https://chatapp-8031c.firebaseio.com',
    projectId: 'chatapp-8031c',
    storageBucket: 'chatapp-8031c.appspot.com',
    messagingSenderId: '763267155809'
  }
};
