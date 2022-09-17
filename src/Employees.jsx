import React from "react";
import { useState } from "react";
import female from "./images/female.png";
import male from "./images/male.jpg;" 



const Employees = () => {
            const [ employees, setEmployees ] = useState ([

            {   id:1,
                    fullName: "Paul Dropz", 
                    designation: "$ world",
                    gender: "male", 
                    teamName: "Team7"
            },
               
            
            { id:2, fullName: "Kabuto Sama", designation: "$ world", gender: "Male", teamName: "Team7"},
                { id:3, fullName: "Orochimaru Sama", designation: "$ world", gender: "Male", teamName: "Team7"},
                { id:4, fullName: "Mitsuki Orochimaro", designation: "$ world", gender: "Male", teamName: "Team7"},
                { id:5, fullName: "White Sage", designation: "$ world", gender: "Male", teamName: "Team7"},
                { id:6, fullName: "Optimus Prime", designation: "Admin", gender: "Female", teamName: "Team9"},
                { id:7, fullName: "Star Scream", designation: "Admin", gender: "Male", teamName: "Team9"},
                { id:8, fullName: "Shock Wave", designation: "Admin", gender: "Male", teamName: "Team9"},
                { id:9, fullName: "Sentenel Prime", designation: "Admin", gender: "female", teamName: "Team9"},
                { id:10, fullName: "Iron hide", designation: "Admin", gender: "Male", teamName: "Team9"},
                { id:11, fullName: "Merek Hamsik", designation: "Ballers", gender: "male", teamName: "Team2"},
                { id:12, fullName: "Leonel Messi", designation: "Ballers", gender: "Male", teamName: "Team2"},
                { id:13, fullName: "Thomas Muller", designation: "Ballers", gender: "female", teamName: "Team2"},
                { id:14, fullName: "Toni Kroos", designation: "Ballers", gender: "Male", teamName: "Team2"},
                { id:15, fullName: "Karim Benzema", designation: "Ballers", gender: "Male", teamName: "Team2"},
                { id:16, fullName: "Frodo Bargins", designation: "Adventure", gender: "Male", teamName: "Team5"},
                { id:17, fullName: "Gandalf White", designation: "Adventure", gender: "Female", teamName: "Team5"},
                { id:18, fullName: "Samuel Gamji", designation: "Adventure", gender: "Male", teamName: "Team5"},
                { id:19, fullName: "Bilbo Baggins", designation: "Adventure", gender: "Male", teamName: "Team5"},
                { id:20, fullName: "Wizard Saruman", designation: "Adventure", gender: "Male", teamName: "Team5"},
                
                

                                    ]);

    return (

           <main>
                
                {
>
                    employees.map (employee) =>

                }

           </main>


    );



}


export default Employees