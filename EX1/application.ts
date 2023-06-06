import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { Journalisation } from "./journalisation";

function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);
  const journal = Journalisation.getInstance(0);
  let tabTemperature = new Array<number>;
  let tabHumidité = new Array<number>;
  stationMeteo.diffuseur.inscrire(aff);
  stationMeteo.diffuseur.inscrire(aff2);

  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();

  stationMeteo.humidité++;
  tabTemperature.push(stationMeteo.temperature);
  tabHumidité.push(stationMeteo.humidité);
  journal.journaliser(0, tabTemperature[0], tabHumidité[0]);
  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
    tabHumidité.push(stationMeteo.humidité);
    tabTemperature.push(stationMeteo.temperature);
    journal.journaliser(p+1, tabTemperature[p + 1], tabHumidité[p + 1]);
  }

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité++;
    stationMeteo.temperature -= 3;
    tabHumidité.push(stationMeteo.humidité);
    tabTemperature.push(stationMeteo.temperature);
    journal.journaliser(p+2, tabTemperature[p + 2], tabHumidité[p + 2]);
  }
  console.log(journal.afficher());
}

main();
