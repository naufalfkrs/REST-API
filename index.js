const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})

app.get("/profil/:name/:age", (req,res) => {
    let name = req.params.name
    let age = req.params.age 
    let response = {
        nama: name,
        umur: age
    }
    res.json(response)
})

app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})


//                                      LATIHAN SOAL                                      //
// SOAL NOMOR 1
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)
    let volume = sisi **3
    let luas_permukaan= 6 * sisi **2
    let response = {
        sisi: sisi,
        result: {
            volume: volume,
            luas_permukaan: luas_permukaan
        }
    }
    res.json(response)
})
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let volume = panjang * lebar * tinggi
    let luas_permukaan= 2 * (panjang*lebar + panjang*tinggi + tinggi*lebar)
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        result: {
            volume: volume,
            luas_permukaan: luas_permukaan
        }
    }
    res.json(response)
})
app.post("/tabung", (req,res) => {
    let jari_jari = Number(req.body.jari_jari)   
    let tinggi = Number(req.body.tinggi)

    if(jari_jari % 7 == 0) {
        let volume = 22 * jari_jari **2 * tinggi / 7;
        let luas_permukaan = 2 * 22 * jari_jari * (jari_jari+tinggi) /7;
        let response = {
            jari_jari: jari_jari,
            tinggi: tinggi,
            result:{
                volume: volume,
                luas_permukaan: luas_permukaan,
            }
        }
        res.json(response)
    }

    let volume = 3.14 * jari_jari **2 * tinggi
    let luas_permukaan = 2 * 3.14 * jari_jari * (jari_jari+tinggi)
    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        result:{
            volume: volume,
            luas_permukaan: luas_permukaan,
        }
    }
    res.json(response)
})
app.post("/kerucut", (req,res) => {
    let jari_jari = Number(req.body.jari_jari)   
    let tinggi = Number(req.body.tinggi)
    let sisi_miring = Number(req.body.sisi_miring)

    if(jari_jari % 7 == 0) {
        let volume = 22 * jari_jari **2 * tinggi /7 /3
        let luas_permukaan = 22 * jari_jari * (sisi_miring + jari_jari) /7
        let response = {
            jari_jari: jari_jari,
            tinggi: tinggi,
            sisi_miring: sisi_miring,
            result:{
                volume: volume,
                luas_permukaan: luas_permukaan,
            }
        }
        res.json(response)
    }

    let volume = 3.14 * jari_jari **2 * tinggi /3
    let luas_permukaan = 3.14 * jari_jari * (sisi_miring + jari_jari)
    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        sisi_miring: sisi_miring,
        result:{
            volume: volume,
            luas_permukaan: luas_permukaan,
        }
    }
    res.json(response)
})

// SOAL NOMOR 2
app.get("/convert/celcius/:temp", (req,res) => {
let temp = req.params.temp
let reamur = 4*temp/5
let fahrenheit = 9*temp/5+32
let kelvin = 5*temp/5+273
let response = {
    celcius: temp,
    result:{
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
    }
}
res.json(response)
})
app.get("/convert/reamur/:temp", (req,res) => {
    let temp = req.params.temp
    let celcius = 5*temp/4
    let fahrenheit = 9*temp/4+32
    let kelvin = 5*temp/4+273
    let response = {
        reamur: temp,
        result:{
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
res.json(response)
})
app.get("/convert/kelvin/:temp", (req,res) => {
    let temp = req.params.temp
    let celcius = 5*(temp-273)/5
    let fahrenheit = 9*(temp-273)/5+32
    let reamur = 4*(temp-273)/5
    let response = {
        kelvin: temp,
        result:{
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }
res.json(response)
})
app.get("/convert/fahrenheit/:temp", (req,res) => {
    let temp = req.params.temp
    let celcius = 5*(temp-32)/9
    let reamur = 4*(temp-32)/9
    let kelvin = 5*(temp-32)/9+273
    let response = {
        fahrenheit: temp,
        result:{
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
res.json(response)
})

// SOAL NOMOR 3
app.get("/convert/biner/:no", (req,res) => {
    let no = req.params.no
    let desimal = parseInt(no, 2).toString(10)
    let oktal = parseInt(no, 2).toString(8)
    let heksadesimal = parseInt(no, 2).toString(16)
    let response = {
        Biner: no,
        result:{
            Desimal: desimal,
            Oktal: oktal,
            Heksadesimal: heksadesimal
        }
    }
res.json(response)
})
app.get("/convert/desimal/:no", (req,res) => {
    let no = req.params.no
    let biner = parseInt(no, 10).toString(2)
    let oktal = parseInt(no, 10).toString(8)
    let heksadesimal = parseInt(no, 10).toString(16)
    let response = {
        Desimal: no,
        result:{
            Biner: biner,
            Oktal: oktal,
            Heksadesimal: heksadesimal
        }
    }
res.json(response)
})
app.get("/convert/oktal/:no", (req,res) => {
    let no = req.params.no
    let biner = parseInt(no, 8).toString(2)
    let desimal = parseInt(no, 8).toString(10)
    let heksadesimal = parseInt(no, 8).toString(16)
    let response = {
        Oktal: no,
        result:{
            Biner: biner,
            Desimal: desimal,
            Heksadesimal: heksadesimal
        }
    }
res.json(response)
})
app.get("/convert/heksadesimal/:no", (req,res) => {
    let no = req.params.no
    let biner = parseInt(no, 16).toString(2)
    let desimal = parseInt(no, 16).toString(10)
    let oktal = parseInt(no, 16).toString(8)
    let response = {
        Heksadesimal: no,
        result:{
            Biner: biner,
            Desimal: desimal,
            Oktal: oktal
        }
    }
res.json(response)
})

// SOAL NOMOR 4
app.post("/bmi", (req,res) => {
    let bb = req.body.berat
    let tb = req.body.tinggi
    let bmi = bb/(tb)**2
    let status = ''
    if (bmi<18.5) {
        status= "Kekurangan berat badan"
    } else if(bmi>=18.5&&bmi<=24.9){
        status= "Normal (Ideal)"
    } else if(bmi>=25.0&&bmi<=29.9){
        status= "Kelebihan berat badan"
    } else if(bmi>=30.0){
        status= "Kegemukan (Obesitas)"
    }
    let response = {
        Berat: bb+' kg',
        Tinggi: tb+' cm',
        BMI: bmi,
        Status: status
    }
    res.json(response)
})

// SOAL NOMOR 5
app.post("/ganjilgenap", (req,res) => {
    let no = req.body.angka
    let ket = ''
    if (no % 2 == 1) {
        ket= "Angka tersebut ganjil"
    } else if(no % 2 == 0){
        ket= "Angka tersebut genap"
    }
    let response = {
        Angka: no,
        Keterangan: ket
    }
    res.json(response)
})
//                                      LATIHAN SOAL                                      //   



//                                      LATIHAN SOAL                                      // 
app.get("/kalkulator/:awal/:akhir", (req,res) => {
    let awal = Number(req.params.awal)
    let akhir = Number(req.params.akhir)
    let penjumlahan = awal+akhir
    let pengurangan = awal-akhir
    let perkalian = awal*akhir
    let pembagian = awal/akhir
    let response = {
        Angka1: awal,
        Angka2: akhir,
        result:{
            Penjumlahan: penjumlahan,
            Pengurangan: pengurangan,
            Perkalian: perkalian,
            Pembagian: pembagian
        }
    }
res.json(response)
})

app.post("/perulanganFor", (req,res) => {
    let awal = Number(req.body.awal)
    let akhir = Number(req.body.akhir)
    let kelipatan = Number(req.body.kelipatan)
    let i
    let tampung = new Array()
    let total = 0

    for (i=awal; i<=akhir; i+=kelipatan) {
        tampung.push(i)
        total +=i
    }
    let response = {
        tampung,
        Total: total
    }
res.json(response)
})

app.post("/matrix", (req,res) => {
    let matrixA = [
        [1, 2],
        [3, 4]
    ]

    let matrixB = [
        [1, 2],
        [4, 6]
    ]
    let hasil = new Array()
    let i
    let j

    for (i=0; i<2; i++) {
        for (j=0; j<2; j++) {
            hasil.push(matrixA[i][j] + matrixB[i][j])
        }
    }
    let response = {
        MatrixA: matrixA,
        MatrixB: matrixB,
        Penjumlahan: hasil
    }
res.json(response)
})
//                                      LATIHAN SOAL                                      // 


app.listen(8000, () => {
    console.log("Server run on port 8000");
})