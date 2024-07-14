import { environment_global } from "./environment.global";

export const environment = {
  ...environment_global,
  name: 'default',
  production: false,
  apiRoot: 'https://localhost:7271/'
};
