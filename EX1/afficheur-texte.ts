import { IObservateur } from "./IObservateur";


export class AfficheurTexte implements IObservateur {
  mettreAJour(temperature: number, humidité: number): void {
    console.log(temperature + "°C\n" + humidité + "%")
  }
}
