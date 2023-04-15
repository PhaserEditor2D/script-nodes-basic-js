// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class OnEventScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }
    eventName = "";
    /* START-USER-CODE */
    awake() {
        this.gameObject?.on(this.eventName, this.executeChildren, this);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

