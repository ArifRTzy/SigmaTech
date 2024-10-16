import { companies, diskon, githubs, hosting, instagrams, murah, phones, seo, tiktoks, whatsapps } from "../utils"
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
    {img: companies, title: "Company Profile", text: "Buat kesan profesional dengan profil perusahaan yang menunjukkan visi, misi, dan kekuatan bisnis Anda."},
    {img: portfolios, title: "Portofolio", text: "Tampilkan hasil kerja terbaik Anda dalam portofolio yang kreatif dan memikat."},
    {img: katalogs, title: "Katalog", text: "Sajikan produk atau layanan Anda dengan katalog online yang mudah diakses dan informatif."},
    {img: customs, title: "Custom", text: "Solusi website yang disesuaikan sepenuhnya dengan kebutuhan dan target bisnis Anda."}    
]

export const benefits = [
    {bold: "Murah. ", normal: "Hanya mulai dari Rp100.000,00"},
    {bold: "Diskon ", normal: "40% untuk design sendiri"},
    {bold: "Support SEO. ", normal: "Mudah ditemukan Google"},
    {bold: "24/7 ", normal: "Layanan prima"},
    {bold: "GRATIS", normal: " hosting"},
]

export const kelebihan = [
    {img: murah, title: "Murah", text: "SigmaTech menawarkan solusi website mulai dari Rp100.000, pilihan terbaik untuk Anda yang membutuhkan layanan murah dan berkualitas."},
    {img: diskon, title: "Diskon", text: "Dapatkan diskon 30% untuk pembuatan website dari desain Anda sendiri, seperti dari Figma, dan kami akan mewujudkannya."},
    {img: seo, title: "Support Seo", text: "Layanan SEO dari SigmaTech membantu website Anda muncul di puncak hasil pencarian Google, meningkatkan trafik secara efektif."},
    {img: phones, title: "Layanan 24/7", text: "SigmaTech siap membantu kapan saja, dengan dukungan layanan pelanggan 24/7 untuk kebutuhan atau pertanyaan Anda."},
    {img: hosting, title: "Gratis Hosting", text: "SigmaTech menyediakan hosting gratis di Vercel, memastikan website Anda dapat diakses dengan cepat dan aman."}    
]

export const faq = [
    {
      question: "Apa yang dimaksud dengan jasa pembuatan website SigmaTech?",
      answer: "Jasa pembuatan website SigmaTech adalah layanan profesional yang menyediakan pembuatan website sesuai dengan kebutuhan spesifik pelanggan, mulai dari desain hingga pengembangan.",
    },
    {
      question: "Apakah saya bisa memilih nama domain untuk website saya?",
      answer: "Ya, Anda dapat memilih nama domain yang sesuai keinginan Anda selama domain tersebut masih tersedia. Contohnya, domainanda.vercel.app.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk pembuatan website?",
      answer: "Durasi pembuatan website bergantung pada kompleksitas dan fitur yang diinginkan. Waktu pengerjaan dapat berkisar antara 2 hari hingga 3 minggu.",
    },
    {
      question: "Apa yang dimaksud dengan diskon 40% dari SigmaTech?",
      answer: "Diskon 40% diberikan kepada pelanggan yang sudah memiliki desain website sendiri. Kami akan langsung mengerjakan pengembangan berdasarkan desain tersebut.",
    },
    {
      question: "Bagaimana prosedur revisi jika ada perubahan pada website?",
      answer: "Kami menyediakan revisi gratis selama 1 minggu setelah website selesai. Revisi akan langsung kami tangani untuk memastikan kepuasan pelanggan.",
    },
    {
      question: "Apa yang harus saya lakukan jika website mengalami error?",
      answer: "Jika terjadi error pada website, cukup laporkan kepada kami dan kami akan segera memperbaikinya tanpa biaya tambahan.",
    },
    {
      question: "Bagaimana metode pembayaran untuk layanan SigmaTech?",
      answer: "Kami menyediakan dua opsi pembayaran: pembayaran awal sebesar 50% sebagai uang muka, dan pelunasan setelah website selesai, atau pelunasan penuh saat melakukan pemesanan.",
    },
    {
      question: "Berapa harga pembuatan website di SigmaTech?",
      answer: "Biaya pembuatan website di SigmaTech tergantung pada tingkat kerumitan website yang dipesan oleh pelanggan, dengan harga mulai dari Rp100.000.",
    },
  ];
  
export const kontak = [
  {img: instagrams, url: ""},
  {img: tiktoks, url: ""},
  {img: whatsapps, url: ""},
]

export const more = [
  {img: instagrams, url: ""},
  {img: githubs, url: ""}
]