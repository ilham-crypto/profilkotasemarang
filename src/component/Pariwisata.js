import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
    render(){
        return(
            <div>
                <h3 align="center">PARIWISATA</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintahan">PEMERINTAHAN</a></Mui.Button>
                </center><hr></hr>
              <Carousel>
                  <img src="/bor.jpeg" width="1300" height="700"/>
                  <img src="/mas.jpg" width="1300" height="700"/>
                  <img src="/pra.jpg" width="1300" height="700"/>
              </Carousel>
              <center>
              <h3>Sejarah Borobudur</h3><hr></hr>
              <p>Candi Borobudur adalah candi peninggalan jaman agama Budha,yang terletak pada daerah kota Magelang.
              Candi berbentuk stupa ini didirikan oleh para penganut agama Buddha Mahayana sekitar tahun 800-an Masehi pada masa pemerintahan wangsa Syailendra.
              Monumen ini terdiri atas enam teras berbentuk bujur sangkar yang di atasnya terdapat tiga pelataran melingkar, pada dindingnya dihiasi dengan 2.672 panel relief dan aslinya terdapat 504 arca Buddha[4]. Borobudur memiliki koleksi relief Buddha terlengkap dan terbanyak di dunia[3]. Stupa utama terbesar teletak di tengah sekaligus memahkotai bangunan ini, dikelilingi oleh tiga barisan melingkar 72 stupa berlubang yang di dalamnya terdapat arca Buddha tengah duduk bersila dalam 
              posisi teratai sempurna dengan mudra (sikap tangan) Dharmachakra mudra (memutar roda dharma). 
              </p>
              </center>
              <a href="https://id.wikipedia.org/wiki/Borobudur">sejarah candi borobudur selengkapnya</a><br></br><br></br>
              <center>
              <h3>Sejarah Candi Prambanan</h3><hr></hr>
              <p>Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 masehi. Candi ini dipersembahkan untuk Trimurti, tiga dewa utama Hindu 
                yaitu Brahma sebagai dewa pencipta, Wisnu sebagai dewa pemelihara, dan Siwa sebagai dewa pemusnah. Berdasarkan prasasti Siwagrha nama asli kompleks candi ini adalah Siwagrha (bahasa Sanskerta yang bermakna 'Rumah Siwa'),
                dan memang di garbagriha (ruang utama) candi ini bersemayam arca Siwa Mahadewa setinggi tiga meter yang menujukkan bahwa di candi ini dewa Siwa lebih diutamakan. </p>
              </center>
              <a href="https://id.wikipedia.org/wiki/Candi_Prambanan">sejarah Candi Prambanan selengkapnya</a><br></br><br></br>
              <center>
                  <h3>Sejarah Masjid Agung Jawa Tengah</h3><hr></hr>
                  <p>Masjid Agung Jawa Tengah adalah masjid yang terletak di Semarang, provinsi Jawa Tengah, Indonesia.
                    Masjid ini mulai dibangun sejak tahun 2001 hingga selesai secara keseluruhan pada tahun 2006. Masjid ini berdiri di atas lahan 10 hektare. Masjid Agung diresmikan oleh Presiden Indonesia Susilo Bambang Yudhoyono pada tanggal 14 November 2006. 
                    Masjid Agung Jawa Tengah (MAJT) merupakan masjid provinsi bagi provinsi Jawa Tengah. </p>
              </center>
              <a href="https://id.wikipedia.org/wiki/Masjid_Agung_Jawa_Tengah">sejarah Masjid_Agung_Jawa_Tengah selengkapanya</a>
              </div>
        )
    }
}
export default Pariwisata;