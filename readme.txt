-------------------------------------------------------
    INSTRUCTIONS TO RUN THIS PROJECT SUCCESSFULLY      |
-------------------------------------------------------

STEP 1: 
    - install nodejs (version: v16.18.0)
    - after cloning the project open the termial in the project and launch the command( npm install )

STEP 2:
    - Launch xampp / wamp/ laragon / workbench
    - create a mysql user using the following command:
        => CREATE USER 'thekafe'@'localhost' IDENTIFIED BY 'thekafe'; (note that the user must have a password)
    - Grant all priviledges to the user:
        =>  GRANT ALL PRIVILEGES ON *.* TO 'thekafe'@'localhost' WITH GRANT OPTION; 

    - Create a db with the name "job_portal"

STEP 3: 
	- To run the app lauch the command: "npm run dev" in your terminal

STEP 4: 
	- check documentation of all the endpoint on: https://documenter.getpostman.com/view/24029816/2s935oNQDS