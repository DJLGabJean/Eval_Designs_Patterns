import { Diffuseur } from "./diffuseur";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private _diffuseur: Diffuseur;

  constructor(temperature = 0, humidité = 15) {
    this._temperature = temperature;
    this._humidité = humidité;
    this._diffuseur = new Diffuseur();
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    this._diffuseur.notifierChangement(this._temperature, this._humidité);
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
    this._diffuseur.notifierChangement(this._temperature, this._humidité);
  }

  public get diffuseur(): Diffuseur {
    return this._diffuseur;
  }

  public toString(): string {
    return this._temperature + "°C\n" + this._humidité + "%";
  }
}
