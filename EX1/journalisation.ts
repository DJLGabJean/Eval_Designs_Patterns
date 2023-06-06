import { IObservateur } from "./IObservateur";

export class Journalisation {
    private static _instances : Map<number, Journalisation> = new Map<number, Journalisation>;
    private _mesures : Array<string>

    private constructor() {
        this._mesures = new Array<string>();
    }

    public static getInstance(clef : number): Journalisation {
        if (!Journalisation._instances.has(clef)) {
            Journalisation._instances.set(clef, new Journalisation());
        }
        return Journalisation._instances.get(clef)!;
    }

    public journaliser(clef : number, temperature : number, humidite : number) : void {
            this._mesures.push("[ " + clef + " ]" + " Température : " + temperature + "°C / Humidité : " + humidite + " %");
    }

    public afficher() : void {
        for (let x of this._mesures){
            console.log(x);
        }
    }
}