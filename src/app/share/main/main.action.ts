export class MainCallAction {
    static type = '[Main] Call a service';
    constructor(public callback?: void) { }
}