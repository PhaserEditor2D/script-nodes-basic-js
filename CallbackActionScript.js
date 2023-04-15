// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class CallbackActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    callback;
    /* START-USER-CODE */
    execute() {
        if (this.callback) {
            this.callback();
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

