
# AngularDemo

Angular client app added to a Web API project.

## Requirements

Must have NodeJS and Angular CLI installed

## Use

Clone this repo

Open a command prompt (PowerShell or CMD).

Change directories to the AngularClient folder

Install libraries with the command:

    npm install

Start the development server and open a browser with the command:

    ng server --open

To transpile the Angular app into JavaScript and add it to wwwroot to integrate with the DOT.NET app:

    ng build
    
(See the configuration in `.angular-cli.json` which specified `"outDir": "../wwwroot"` as the location for build output)

## Added features to be discussed in class

Routing used to display either a list or paragraphs of text

Retrieving data from the Web API ValuesController using HTTP

