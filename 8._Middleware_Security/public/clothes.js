//files imported from clothesFactory.js.
// now the order when the script is being sourced in the html is not important
// unlike if it wasnt imported and exported then the order would have to clothesFactory script before clothes script
import { clothes, shipClothes } from "./clothesFactory.js";

console.log(clothes);

console.log(shipClothes());
