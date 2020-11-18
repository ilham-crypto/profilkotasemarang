import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Kuliner extends Component{
    render(){
        return(
            <div>
                 <h3 align="center">KULINER</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintahan">PEMERINTAHAN</a></Mui.Button>
                </center><hr></hr>
              <Carousel>
                  <img src="/klepon.jpg" width="1300" height="700"/>
                  <img src="/Lumpia-Semarang.jpg" width="1300" height="700"/>
                  <img src="/soto-kudus.jpg" width="1300" height="700"/>
              </Carousel>
              <center>
                  <h3>Sejarah Klepon</h3><hr></hr>
                  <p>Klepon atau kelepon adalah sejenis makanan tradisional atau kue tradisional Indonesia yang termasuk ke dalam kelompok jajanan pasar. 
                    Makanan enak ini terbuat dari tepung beras ketan yang dibentuk seperti bola-bola kecil dan diisi dengan gula merah lalu direbus dalam air mendidih. Klepon yang sudah masak lalu digelindingkan di atas parutan kelapa agar melekat, sehingga klepon tampak berbalur parutan kelapa. 
                    Biasanya klepon diletakkan di dalam wadah yang terbuat dari daun pisang. </p>
              </center>
              <a href="https://id.wikipedia.org/wiki/Klepon">sejarah klepon selengkapnya</a><br></br><br></br>
              <center>
                 <h3>Sejarah Lumpia</h3><hr></hr>
                 <p>Lumpia adalah makanan semacam rollade yang berisi rebung, telur, dan daging ayam atau udang.
                    Cita rasa lumpia semarang adalah perpaduan rasa antara Tionghoa dan Indonesia karena pertama kali dibuat oleh seorang keturunan Tionghoa yang menikah dengan orang Indonesia dan menetap di Semarang, Jawa Tengah.
                    [butuh rujukan] Makanan ini mulai dijajakan dan dikenal di Semarang ketika pesta olahraga GANEFO diselenggarakan pada masa pemerintahan Presiden Soekarno.[butuh rujukan] </p>
              </center>
              <a href="https://id.wikipedia.org/wiki/Lumpia_Semarang">sejarah Lumpia selengkapnya</a><br></br><br></br>
              <center>
                  <h3>Sejarah Soto</h3><hr></hr>
                  <p>Soto, sroto, sauto, tauto, atau coto adalah makanan khas Indonesia seperti sop yang terbuat dari kaldu daging dan sayuran. 
                    Daging yang paling sering digunakan adalah daging sapi dan ayam, tetapi ada pula yang menggunakan daging babi atau kambing. Berbagai daerah di Indonesia memiliki soto khas daerahnya masing-masing dengan komposisi yang berbeda-beda, misalnya soto Madura, soto Kediri, soto Pemalang, soto Lamongan, soto Jepara, soto Semarang, soto Kudus, soto Betawi, soto Padang, soto Bandung, sroto Sokaraja, soto Banjar, soto Medan, dan coto Makassar. Soto juga diberi nama sesuai isinya, misalnya soto ayam, soto babat, atau soto kambing. 
                    Ada pula soto yang dibuat dari daging kaki sapi yang disebut dengan soto sekengkel. </p>
              </center>
              <a href="https://id.wikipedia.org/wiki/Soto">Sejarah Soto selengkapnya</a>
            </div>
        )
    }
}
export default Kuliner;