/**
 * This shows how to modify an existing building
 */
registerMod(() => {
    return class ModImpl extends shapez.Mod {
        constructor(app, modLoader) {
            super(
                app,
                {
                    website: "https://tobspr.io",
                    author: "tobspr",
                    name: "Mod Example: Modify existing building",
                    version: "1",
                    id: "modify-existing-building",
                    description: "Shows how to modify an existing building",
                },
                modLoader
            );
        }

        init() {
            // Make Rotator always unlocked
            this.modInterface.replaceMethod(shapez.MetaRotaterBuilding, "getIsUnlocked", function () {
                return true;
            });

            // Add some custom stats to the info panel when selecting the building
            this.modInterface.replaceMethod(shapez.MetaRotaterBuilding, "getAdditionalStatistics", function (
                root,
                variant
            ) {
                return [["Awesomeness", 5]];
            });
        }
    };
});
