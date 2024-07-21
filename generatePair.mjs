import * as DiamSdk from "diamante-sdk-js";
import { readFileSync, writeFileSync } from "fs";

function keyPair() {
  return DiamSdk.Keypair.random();
}

export function getKeyPair(filename) {
  const keypairsecret = readFileSync(filename);
  return DiamSdk.Keypair.fromSecret(keypairsecret.toString());
}

function writeKeyPair() {
  const keypair = keyPair();
  writeFileSync(`./accountPairs/keypair${Date.now()}.json`, keypair.secret());
}

// if (true) {
//     writeKeyPair();
// }

