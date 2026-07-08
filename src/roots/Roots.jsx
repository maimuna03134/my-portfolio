import React from "react";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/ui/Footer";



const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>


            <div>
                <Outlet></Outlet>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Roots;