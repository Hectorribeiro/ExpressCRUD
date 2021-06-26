const express = require ("express"); //Import o express

const app = express();// Calling express by app

app.use(express.json());//Will work in all routes

const router = express.Router();//Creating a router for receve the req

//                0         1          2        3          4
const foods = ["pasta","haburguer","XauXixa","water","veganOptions"];

//return  "foods" by index
app.get("/food_options/:index", (req,res) =>{
    const {index} = req.params;
        return res.json(foods[index]);
});
//return all foods
app.get("/foods", (req,res) => {
    return res.json(foods); 
});
// Create a new food
app.post("/foods", (req,res) => {
    const {name} = req.body; //"Req" on Body
        foods.push(name)  //Push the name
            return res.json();//Will return the foods
});
//Update
app.put("/foods/:index", (req,res) =>{
    const {index} = req.params;//const for index
        const {name} = req.body;//alter the food
            foods [index] = name;
                return res.json(foods);
});
//delete
app.delete("/foods/:index" , (req,res) => {//User need type the index to delete
    const {index} = req.params;
        app.splice(index, 1); //Alter a content from array
            return res.json({message:"The food was deleted."})
});



app.use("/food", router) //usar rotas

app.listen(8080, () =>{ // escutando na porta 8080
    console.info("Server is running");
});


