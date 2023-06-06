import { IObservateur } from "./IObservateur";

export class Diffuseur {
    private _observateurs: Array<IObservateur> = [];

    inscrire(observateur: IObservateur): void {
        this._observateurs.push(observateur);
    }
  
    déinscrire(observateur: IObservateur): void {
        const index = this._observateurs.indexOf(observateur);
        if (index !== -1) {
            this._observateurs.splice(index, 1);
        }
    }
  
    notifierChangement(temperature: number, humidité: number): void {
        this._observateurs.forEach((observateur) => {
            observateur.mettreAJour(temperature, humidité);
        });
    }
}