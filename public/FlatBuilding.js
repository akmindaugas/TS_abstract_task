// 1. Parašyti abstrakčią klasę "Building". Building turi turėt properties: "price", "type", "yearFinished";
// 2. Abstrakti klasė turi turėt savo metodą buyProperty (console.log išspauzdina "NUPIRKTA")
// 3. Abstrakti klasė turi turėt metodą contactSeller (console.log  ...);
// 4. Abstrakti klasė turi turėt abstraktų metodą enterHome;
// 5. Abstrakti klasė turi turėt abstraktų metodą arrange renovateBuilding;
// 6. Parašyt klases HouseBuilding, FlatBuilding;
// 7. HouseBuilding turi turėt papildomus properties "yardArea", "floors";
// 8. FlatBuilding turi turėt papildomus properties "floor", "windowsDirection";
// 9. Sukurtos klasės turi extendint abstrakčią klasę;
// 10. Extendinus klasę nepamiršt užnaudot abstrakčius metodus;
import { Building } from "./script";
class FlatBuilding extends Building {
    constructor(floor, windowsDirection, price, type, yearFinished) {
        // kad nemestu klaidos, nepadavus paveldimiem properciams argumentu
        super(price, type, yearFinished);
        this.floor = floor;
        this.windowsDirection = windowsDirection;
    }
    enterHome() {
        console.log("enter");
    }
    renovateBuilding() {
        console.log("renovate");
    }
}
