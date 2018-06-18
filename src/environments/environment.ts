// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC1TRRv1GEAvYOXcxmWNOtAqw2LuGNCz2U",
        authDomain: "passwordlessapp.firebaseapp.com",
        databaseURL: "https://passwordlessapp.firebaseio.com",
        projectId: "passwordlessapp",
        storageBucket: "passwordlessapp.appspot.com",
        messagingSenderId: "92839145381"
    },
};
