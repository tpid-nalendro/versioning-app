/**
 * load data env
 * @key [string]
 * @init [string]
 */
// eslint-disable-next-line import/no-anonymous-default-export
export const env = (key, init) => process.env[key] || init
