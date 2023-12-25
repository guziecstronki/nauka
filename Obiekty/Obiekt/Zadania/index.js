let pb95 = 4;

const data = new Date()

const oferta = {
    marka: "Kia",
    model: "Carens",
    cena: 60000,
    spalanie: 8,
    koszt100km() {
        return `${pb95 *  this.spalanie} zl`
    },
    wiekSamochodu(rok) {
        const carYears = data.getFullYear() - rok
        const wynik = carYears == 0 ? `Z tego roku` 
        : carYears == 1 ? `${carYears} rok`
        : carYears <= 4 ? `${carYears} lata`
        : `${carYears} lat`
        return wynik
    }
}
const { marka, model, koszt100km, wiekSamochodu } = oferta;
console.log();
console.log(`Koszt utrzymania to: ${koszt100km()}`);
console.log(`Wiek samochodu: ${wiekSamochodu(2007)}`);
console.log(data);
// console.log(utrzymanie)c
console.log({});