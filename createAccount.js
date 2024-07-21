import * as DiamSdk from "diamante-sdk-js";
import { getKeyPair } from "./generatePair.mjs";

const pair = getKeyPair("./accountPairs/keypair1.json");

(async function main() {
  try {
    const response = await fetch(
      `https://friendbot.diamcircle.io?addr=${encodeURIComponent(
        pair.publicKey()
      )}`
    );
    const responseJSON = await response.json();
    console.log("SUCCESS! You have a new account :)\n", responseJSON);
  } catch (e) {
    console.error("ERROR!", e);
  }
})();