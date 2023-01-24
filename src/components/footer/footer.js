import * as React from "react";
import "./footer.css";
import FB from './FB.png'
import Twitter from './Twitter.png'
import Ins from './Ins.png'

const Footer = () => {
  return (
    <div className="container text-black grid grid-cols-2 pt-40 ">
      <div className="cols-span-1">
        <div className="flex space-x-5 mb-6">
          <div className="logo logo-footer text-white flex justify-center">
            <p className="font-extrabold text-2xl self-center">K</p>
          </div>
          <p className="font-bold text-2xl self-center leading-8" style={{color: '#40434A'}}>
            Kinka <br></br> Finance
          </p>
        </div>
        <p className="text-xl leading-9 mb-10" style={{color: '#585C65', maxWidth: '371px'}}>2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet  </p>
        <div className="flex space-x-6">
          <img src={FB} width={50} height={50}></img>
          <img src={Twitter} width={50} height={50}></img>
          <img src={Ins} width={50} height={50}></img>

        </div>
      </div>
      <div className="cols-span-1 grid grid-cols-3 grid-rows-5 gap-x-4">
        <div className="cols-span-1 space-y-8">
          <h1 className="text-xl font-bold" style={{color: '#40434A'}}>Location</h1>
          <div className="space-y-6">
          <p className="leading-8" style={{color: '#70737C'}}>America</p>
          <p className="leading-8" style={{color: '#70737C'}}>Asia</p>
          <p className="leading-8" style={{color: '#70737C'}}>Europe</p>
          <p className="leading-8" style={{color: '#70737C'}}>Africa</p>
          </div>
          
        </div>
        <div className="cols-span-1 space-y-8">
          <h1 className="text-xl font-bold" style={{color: '#40434A'}}>Contact</h1>
          <div className="space-y-6">
          <p className="leading-8" style={{color: '#70737C'}}>About me</p>
          <p className="leading-8" style={{color: '#70737C'}}>Teams</p>
          <p className="leading-8" style={{color: '#70737C'}}>Profile</p>
          <p className="leading-8" style={{color: '#70737C'}}>FAQ</p>
          </div>
          
        </div>
        <div className="cols-span-1 space-y-8">
          <h1 className="text-xl font-bold" style={{color: '#40434A'}}>Legals</h1>
          <div className="space-y-6">
          <p className="leading-8" style={{color: '#70737C'}}>Privacy</p>
          <p className="leading-8" style={{color: '#70737C'}}>Disclaimer</p>
          <p className="leading-8" style={{color: '#70737C'}}>Terms</p>
          <p className="leading-8" style={{color: '#70737C'}}>Company</p>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Footer;
