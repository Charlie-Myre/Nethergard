import {NETHER} from "./module/config.js";

Hooks.once("init", async () => {
    console.log(`NETHER | Initializing Nethergard Core System`);

    // Setting up the Global Configuration Object
    CONFIG.NETHER = NETHER;
    CONFIG.INIT = true;

    // Register custome Sheets and unregister the start Sheets
    // Items.unregisterSheet("core", ItemSheet);
    // Actors.unregisterSheet("core", ActorSheet);

    // Load all Partial-Handlebar Files
    preloadHandlebarsTemplates();

    // Register Additional Handlebars Helpers
    registerHandlebarsHelpers();
    
});

Hooks.once("ready", async () => {

    // Finished Initalization Phase and release lock
    CONFIG.INIT = false;

    // Onle exectute when run as Gamemaster
    if(!game.user.isGM) return;
});

function preloadHandlebarsTemplates() {
    const templatePaths = [
        // "systems/nether/templates/partials/character-sheet/character-sheet.hbs",
        // "systems/nether/templates/partials/character-sheet/character-sheet-header.hbs",
        // "systems/nether/templates/partials/character-sheet/character-sheet-body.hbs",
        // "systems/nether/templates/partials/character-sheet/character-sheet-footer.hbs"
    ];

    return loadTemplates(templatePaths);
};

function registerHandlebarsHelpers() {
    Handlebars.registerHelper("equals", function (v1, v2) { return v1 === v2; });

    Handlebars.registerHelper("contains", function (element, search) { return element.includes(search); });

    Handlebars.registerHelper("concat", function (s1, s2, s3 = "") { return s1 + s2 + s3; });

    Handlebars.registerHelper("isGreater" , function (v1, v2) { return v1 > v2; });

    Handlebars.registerHelper("isEqualOrGreater" , function (v1, v2) { return v1 >= v2; });

    Handlebars.registerHelper("ifOr", function(con1, con2) { return con1 || con2; });

    Handlebars.registerHelper("doLog", function (v1) { console.log(v1); });

    Handlebars.registerHelper("toBoolean", function (v1) { return !!v1; });

    Handlebars.registerHelper("for", function (from, to, incr, content) {

        let result = '';

        for(let i = from; i < to; i += incr) {
            result += content.fn(i);
        }
        return result;
    });

    Handlebars.registerHelper("times", function(n, content) {

        let result = '';

        for(let i = 0; i < n; i++) {
            result += content.fn(i);
        }
        return result;
    });

    Handlebars.registerHelper("notEmpty", function (v1) { 

        if (v1 == 0 || v1 == "0") return true;
        if (v1 == null|| v1 =="") return false;
        return true;
    });
}

/* GENERAL FUNCTIONS */
/* GENERAL FUNCTIONS */
/* GENERAL FUNCTIONS */

