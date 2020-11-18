import * as Mui from '@material-ui/core';
import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <h3 align="center">HOME</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintahan">PEMERINTAHAN</a></Mui.Button>
                </center><hr></hr>
            </div>
           
        )
    }
}
export default Home;