        const express = require("express")
        const cors = require("cors")
        const morgan = require("morgan");
        const data = require("./Data/data")
        const db = require("./Database/Db")
        const DemoRoutes = require("./Routes/DemoRoutes")


         const app = express()
         
         app.use(morgan("dev"));
         app.use(cors())
         app.use(express.json())
          db()

        app.use("/demo", DemoRoutes);


       app.listen(5000, () => {
        console.log("server runnng")
        })