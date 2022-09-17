import React from "react";
import { useState } from "react";



const employees = () => {
            const [ Employees, setEmployees ] = useState ([

                { id:1, fullName: "Paul Dropz", designation: "Web-Developer", gender: "male", teamName: "Team7"},
                { id:2, fullName: "Yelton Athanasius", designation: "Data Scientist", gender: "Male", teamName: "Team5"},
                { id:3, fullName: "Suleiman Shehu", designation: "Animation", gender: "Male", teamName: "Team7"},
                { id:4, fullName: "Mitsuki Orochimaro", designation: "Data Scientist", gender: "Male", teamName: "Team5"},
                { id:5, fullName: "White Sage", designation: "generator mofo", gender: "Male", teamName: "Team7"},


                                    ]);

    return (

           <main>
                <div>
                    Employees.map = ("Employees") =>   {
                     (
                            <p>Employees.fullName</p>
                        )
                    }      

                </div>
            

           </main>


    );



}


export default employees