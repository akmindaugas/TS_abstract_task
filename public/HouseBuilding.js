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
class HouseBuilding extends Building {
    constructor(yardArea, floors, 
    // price: number,
    type, yearFinished) {
        super();
        this.yardArea = yardArea;
        this.floors = floors;
        // this.price = price;
        this.type = type;
        this.yearFinished = yearFinished;
    }
    enterHome() {
        console.log("enter");
    }
    renovateBuilding() {
        console.log("renovate");
    }
}
const MyHouseBuilding = new HouseBuilding(250, 5, "cottage", 2011);
MyHouseBuilding.enterHome();
MyHouseBuilding.renovateBuilding();
console.log(MyHouseBuilding);
