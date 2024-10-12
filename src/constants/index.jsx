import { companies } from "../utils"
import { portfolios } from "../utils"
import { katalogs } from "../utils"
import { customs } from "../utils"

export const navbar = [
    {title : "Home", url: ""},
    {title : "About", url: ""},
    {title : "Layanan", url: ""},
    {title : "Order", url: ""},
    {title : "Kelebihan", url: ""},
    {title : "FAQ", url: ""},
    {title : "Kontak", url: ""},
]

export const layanans = [
    {img: companies, title: "Company Profile", text: "Tampilkan identitas dan keunggulan bisnis dengan profil perusahaan yang profesional."},
    {img: portfolios, title: "Portofolio", text: "Pamerkan proyek-proyek terbaik kamu dalam portofolio yang keren dan menarik."},
    {img: katalogs, title: "Katalog", text: "Perkenalkan produk atau layanan kamu dengan katalog online yang atraktif dan informatif."},
    {img: customs, title: "Custom", text: "Dapatkan solusi website yang dirancang khusus untuk kebutuhan bisnis kamu."}
]

export const benefits = [
    {bold: "Murah. ", normal: "Hanya mulai dari Rp100.000,00"},
    {bold: "Diskon ", normal: "40% untuk design sendiri"},
    {bold: "Support SEO. ", normal: "Mudah ditemukan Google"},
    {bold: "24/7 ", normal: "Layanan prima"},
    {bold: "GRATIS", normal: " hosting"},
]