console.log("veikia");
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
export class Building {
    constructor(price, type, yearFinished) {
        this.price = price;
        this.type = type;
        this.yearFinished = yearFinished;
    }
    buyProperty() {
        console.log("Purchased");
    }
    conctactSeller() {
        console.log("Contact done");
    }
}
