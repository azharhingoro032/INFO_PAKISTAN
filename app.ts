#! /usr/bin/env node

import inquirer from "inquirer";

const mainMenu = async () => {
    while (true) {
        let menuChoice = await inquirer.prompt({
            name: "menu",
            message: "Select an option:",
            type: "list",
            choices: [
                { name: "Provinces of Pakistan", value: "provinces" },
                { name: "Exit", value: "exit" }
            ]
        });

        if (menuChoice.menu === "exit") {
            console.log("Exiting the application...");
            setTimeout(() => process.exit(0), 1000); 
            break; 
        }

        await handleProvinceSelection();
        
    }
};

const handleProvinceSelection = async () => {
    let info_pak = await inquirer.prompt([
        {
            name: "provinces",
            message: "Select a Province of Pakistan",
            type: "list",
            choices: [
                { name: "SINDH", value: "sindh" },
                { name: "BLOCHISTAN", value: "blochistan" },
                { name: "KHYBER PAKHTUNKHWA", value: "khyber_pakhtunkhwa" },
                { name: "PUNJAB", value: "punjab" },
                { name: "Back", value: "back" }
            ]
          
        }
    ]);
         

    if (info_pak.provinces === "back") {
        return; 

    }
    const handlecity = await inquirer.prompt({
        name: "city",
        message: "select a city of pakistan",
        type: "list",
        choices: [
            {name: "capital of pakistan islamabad ", value: "capital of pakistan islamabad "},
            {name: "largest of pakistan karachi ", value: "largest of pakistan karachi "},
            {name: "rawalpindi ", value: "rawalpindi"},
            {name: "back", value: "back"}
        ]
    }) 

    if (handlecity.city === "back") {
        return;
        
    }

    let provinceInfo = "";

    switch (info_pak.provinces) {
        case "sindh":
            provinceInfo = "Sindh Cities: " + info_pak.sindh;
            break;
        case "blochistan":
            provinceInfo = "Balochistan Cities: " + info_pak.blochistan;
            break;
        case "punjab":
            provinceInfo = "Punjab Cities: " + info_pak.punjab;
            break;
        default:
            provinceInfo = "No information available";
    }

    console.log(provinceInfo);
};




mainMenu();