export interface IObservateur {
    mettreAJour(temperature: number, humidité: number): void;
}