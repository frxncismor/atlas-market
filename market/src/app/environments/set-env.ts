const setEnv = () => {
  const fs = require("fs");
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = "./src/app/environments/environment.ts";
  // Load node modules
  const colors = require("colors");
  const appVersion = require("../../../package.json").version;
  require("dotenv").config({ path: require("path").join(__dirname, ".env") });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  stripePrivateApiKey: '${process.env['STRIPE_PRIVATE_API_KEY']}',
  stripePublicApiKey: '${process.env['STRIPE_PUBLIC_API_KEY']}',
  appVersion: '${appVersion}',
  production: true,
};
`;
  console.log(
    colors.magenta(
      "The file `environment.ts` will be written with the following content: \n",
    ),
  );
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        colors.cyan(
          `Angular environment.ts file generated correctly at ${targetPath} \n`,
        ),
      );
    }
  });
};

setEnv();
