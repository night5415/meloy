interface IEnvironmentVariables extends ImportMetaEnv {
    VITE_APP_VERSION: string
}

const EnvironmentVariables = (): IEnvironmentVariables => { return import.meta.env as unknown as IEnvironmentVariables };

export { EnvironmentVariables as default }