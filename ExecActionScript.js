// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class ExecActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    targetAction;
    /* START-USER-CODE */
    execute() {
        if (this.targetAction) {
            this.targetAction.execute();
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

