// function powitaj() {
  //   alert("Witaj Świecie!");
  // }
  // powitaj()
  // w tej linii wywołaj powyższą funkcję, komentarz zostaw w spokoju
  
  // function suma(a,b) {
    //   return a + b
    // }
    // console.log(suma(3,5));
    
    // function test() {
//   return "No cześć!";
// }

// const container = document.querySelector('.container');

// function test() {
//   container.textContent = `Cześć, cześć.`  
// }
// test()

// const suma = (a,b) => a + b
// const a = prompt('Podaj a')
// const b = prompt('Podaj b')

// alert(suma(+a,+b));

// const a = prompt('Podaj a')
// const b = prompt('Podaj b')

// const podstawy = (a,b) => [+a/+b, +a*+b, +a-+b]
// alert(podstawy(a,b))

// const a = prompt('Podaj a')
// const b = prompt('Podaj b')
// const c = prompt('Co robimy?')

// const dzialanie = (a,b,callback) => callback(+a,+b)
// const dodawanie = (a,b) => a+b
// const odejmowanie = (a,b) => a-b
// const dzielenie = (a,b) => a/b
// const mnozenie = (a,b) => a*b

// alert(c == 'dodawanie' ? dzialanie(a,b,dodawanie) :
//       c == 'odejmowanie' ? dzialanie(a,b,odejmowanie) :
//       c == 'mnozenie'? dzialanie(a,b,mnozenie) :
//       c == 'dzielenie'? dzialanie(a,b,dzielenie): 'bledne dane')


// const a = prompt('Podaj a')
// const b = prompt('Podaj b')
// const c = prompt('Podaj c')

// const najwieksza = (a, b, c) => Math.max(a, b, c)
// alert(najwieksza(a, b, c))

// const a = prompt('Podaj a')

// const czyWysoki = (a) => {
//   if(a < 150){
//     return 'niski'
//   }else if(a > 180){
//     return 'wysoki'
//   }else{
//     return 'sredni'
//   }  
// }
// alert(czyWysoki(+a))

// const waga = prompt('Podaj wage')
// const wzrost = prompt('Podaj wzrost')

// const BMI = (waga, wzrost) => {
//   const wzrostWmetrach = wzrost / 100
//   const wynikBMI = waga / (wzrostWmetrach ** 2)
//   if(wynikBMI < 18.5){
//     return 'Za mało'
//   }else if(wynikBMI > 25){
//     return 'za duzo'
//   }else{
//     return wynikBMI
//   }  
// }
// alert(BMI(+waga, +wzrost))

// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const button = document.getElementById('button')
// const ktoStarszy = (a) => {
//   const data1 = first.value.split(".")
//   const data2 = second.value.split(".")
//   let wynik = ''
//   if(data1[0] < data2[0]){
//     wynik = 'starszy pierwszy'
//   }else if(data1[0] > data2[0]){
//     wynik = 'starszy drugi'
//   }else if(data1[1] < data2[1]){
//     wynik = 'starszy pierwszy'
//   }else if(data1[1] > data2[1]){
//     wynik = 'starszy drugi'
//   }else if(data1[2] < data2[2]){
//     wynik = 'starszy pierwszy'
//   }else if(data1[2] > data2[2]){
//     wynik = 'starszy drugi'
//   }
//   alert(wynik)
// }
// button.addEventListener('click', ktoStarszy)

// const rok = 2020
// const czyPrzystepny = (rok) => rok % 4 == 0 ? 'przystepny' : 'niePrzystepny'
// console.log(czyPrzystepny(rok));

// const haslo = prompt('podaj hasło')

// const czyDuzoZnakow = (haslo) => haslo.length < 4 ? 'hasło słabe' : haslo.length < 8 ? 'hasło średnie' : 'hasło mocne';

// const czyDuzeLitery = (haslo) => haslo.split('').some(znak => znak === znak.toUpperCase());

// const czyMaleLitery = (haslo) => haslo.split('').some(znak => znak === znak.toLowerCase()) ? 'hasło słabe' : czyDuzeLitery(haslo);

// const czyCyfry = (haslo) => haslo.split('').some(znak => /^\d$/.test(znak)) ? 'hasło słabe' : czyMaleLitery(haslo);

// const czySilne = (haslo) => czyCyfry(haslo);

// console.log(czyDuzoZnakow(haslo));
// console.log(czySilne(haslo));

// const a = 5
// const b = 3
// const c = 7
// const czyTrojkat = (a, b, c) => {
//   if(a + b > c){
//     return 'Mozna'
//   }else{
//     return 'Nie mozna'
//   }
// }
// console.log(czyTrojkat(a,b,c));

// const haslo = 'siemaneckzo'

// const szyfr = (haslo) => {
// const newHaslo = [...haslo]
// const result = []
//   for (let i = 0; i < newHaslo.length; i++) {
//     const char = newHaslo[i];
//     if (char >= 'a' && char <= 'x') {
//       result.push(String.fromCharCode(char.charCodeAt(0) + 2));
//     } else if (char == 'y') {
//       result.push('a');
//     } else if (char == 'z') {
//       result.push('b');
//     } else if (char >= 'A' && char < 'X') {
//       result.push(String.fromCharCode(char.charCodeAt(0) + 2));
//     } else if (char === 'X') {
//       result.push('Z');
//     } else {
//       result.push(char);
//     }
//   }
//   return result.join('');
// }
// console.log(szyfr(haslo));


// FORMULARZE


// const goscie = document.getElementById('text1')
// const poprawiny = document.getElementById('checkbox1')
// const result = document.getElementById('wynik1')

// const oblicz = () => {
//   let wynik = +goscie.value * 100
//   if(poprawiny.checked){
//     wynik *= 1.3
//   }
//   result.textContent = wynik
//   console.log(wynik);
// }
// goscie.addEventListener('change', oblicz)
// poprawiny.addEventListener('change', oblicz)

// const kilometry = document.getElementById('text1')
// const jestemZ = document.getElementById('checkbox1')
// const result = document.getElementById('wynik1')

// const oblicz = () => {
//   let wynik = +kilometry.value * 2
//   if(jestemZ.checked){
//     result.textContent = "dowiezeimy za friko"
//   }else{
//     result.textContent =  `Dowóz będzie cię kosztował ${wynik}zł`
//   }
// }
// kilometry.addEventListener('change', oblicz)
// jestemZ.addEventListener('change', oblicz)

// const a = document.getElementById('a')
// const b = document.getElementById('b')
// const wynik = document.getElementById('wynik')

// const guziki = document.querySelectorAll('button')

// const oblicz = (a, b, callback) => callback(a, b) 
// const fdodawanie = (a, b) => wynik.textContent = a + b 
// const fodejmowanie = (a, b) => wynik.textContent = a - b
// const fmnozenie = (a, b) => wynik.textContent = a * b 
// const fdzielenie = (a, b) => wynik.textContent = a / b 
// const freszta = (a, b) => wynik.textContent = a % b
// const fcalkowite = (a, b) => wynik.textContent = Math.round(a / b) 

// guziki.forEach(guzik => {
//     guzik.addEventListener('click', () => {
//     if(guzik.id == 'dodawanie'){
//     oblicz(+a.value,+b.value,fdodawanie)
//     } else if(guzik.id == 'odejmowanie'){
//       oblicz(+a.value,+b.value,fodejmowanie)
//     } else if(guzik.id == 'mnozenie'){
//       oblicz(+a.value,+b.value,fmnozenie)
//     } else if(guzik.id == 'dzielenie'){
//       oblicz(+a.value,+b.value,fdzielenie)
//     } else if(guzik.id == 'reszta'){
//       oblicz(+a.value,+b.value,freszta)
//     } else if(guzik.id == 'calkowite'){
//       oblicz(+a.value,+b.value,fcalkowite)
//     }
//   })
// })


// const wynikDisplay = document. getElementById('wynik')

// const oblicz = () => {
//   const first = parseInt(document.getElementById('first').value)
//   const second = parseInt(document.getElementById('second').value)
//   const third = parseInt(document.getElementById('third').value)
//   const fourth = parseInt(document.getElementById('fourth').value)
//   const fifth = parseInt(document.getElementById('fifth').value)

//   const checkbox1 = document.getElementById('checkbox1')
//   const checkbox2 = document.getElementById('checkbox2')
//   const checkbox3 = document.getElementById('checkbox3')
//   const checkbox4 = document.getElementById('checkbox4')
//   const checkbox5 = document.getElementById('checkbox5')

//   let wynik = 0

//   if(checkbox1.checked){
//     wynik += first
//   }
  
//   if(checkbox2.checked){
//     wynik += second
//   }
  
//   if(checkbox3.checked){
//     wynik += third
//   }
  
//   if(checkbox4.checked){
//     wynik += fourth
//   }
  
//   if(checkbox5.checked){
//     wynik += fifth
//   }

//   wynikDisplay.textContent = wynik
// }

// const checkboxy = document.querySelectorAll('input[type="checkbox"]')
// checkboxy.forEach(check => {
//   check.addEventListener('change', () => {
//     oblicz()
//   })
// })


// const button = document.getElementById('btn')
// const wynik = document.getElementById('wynik')  

// const oblicz = () => {
//   const ogloszenia = parseInt(document.getElementById('text').value)
//   const stalyKlient = document.getElementById('checkbox')
//   let cena = 0
//   if(ogloszenia <= 50){
//     cena = ogloszenia * 2
//   }else if(ogloszenia <= 100){
//     cena = ogloszenia * 1.5
//   }else{
//     cena = ogloszenia * 1
//   }

//   if(stalyKlient.checked){
//     cena *= 0.8
//   }
//   wynik.textContent = cena
// }

// button.addEventListener('click', oblicz)


// const button = document.getElementById('btn')
// const wynik = document.getElementById('wynik')  

// const oblicz = () => {
//   const cegly = parseInt(document.getElementById('text').value)
//   const km = parseInt(document.getElementById('km').value)
//   const premium = document.getElementById('checkbox')
//   let cena = 0
//   let waga = 0


//   if(premium.checked){
//     cena = cegly * 2.60
//     waga = cegly * 1.75
//     let transport = (Math.floor(waga / 10) * 0.5) * km
//     wynik.textContent = `Zakupiona ilość cegieł: ${cegly}, cegła premium, koszt zakupu cegieł ${cena}, waga cegieł ${waga}, koszt transportu ${transport}`
//   }else{
//     cena = cegly * 2
//     waga = cegly * 1.5
//     let transport = (Math.floor(waga / 10) * 0.5) * km
//     wynik.textContent = `Zakupiona ilość cegieł: ${cegly}, cegła standardowa, koszt zakupu cegieł ${cena}, waga cegieł ${waga}, koszt transportu ${transport}`
//   }
// }
// button.addEventListener('click', oblicz)


// const button = document.getElementById('btn')
// const wynik = document.getElementById('wynik')  

// const oblicz = () => {
//   const normalne = parseInt(document.getElementById('normalne').value)
//   const ulgowe = parseInt(document.getElementById('ulgowe').value)
//   const godziny = parseInt(document.getElementById('godziny').value)

//   const kartaRodziny = document.getElementById('checkbox')

//   let cenaNormalnych = normalne * 10 * godziny
//   let cenaUlgowych = ulgowe * 5 * godziny
//   if(godziny > 4){
//     cenaNormalnych = 50
//     cenaUlgowych = 25
//   }
//   if(ulgowe % 15 == 0){
//     cenaNormalnych -= 10
//   }
//   let cena = cenaNormalnych + cenaUlgowych
  
//   if(kartaRodziny.checked){
//     cena *= 0.9
//   }
//   wynik.textContent = cena
// }

// button.addEventListener('click', oblicz)
