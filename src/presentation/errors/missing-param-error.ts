export class MissingParamError extends Error {
    constructor (paramName: string) {
        super(`Missinf param: ${paramName}`)
        this.name = 'MissingParamError'
    }
}