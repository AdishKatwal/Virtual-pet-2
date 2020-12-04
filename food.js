class Food{

    constructor(){
        var foodStock;
        var lastFed;
    }


getFoodStock(){
    var foodStockRef = database.ref('Food');
    foodStockRef.on("value",function(data){
      foodStock = data.val();
    })
 }
 
 updateFoodStock(food){
    database.ref('/').update({
        foodStock: food
    })
 }
 deductFood(){
    database.ref('/').update({
        foodStock: food
    })
 }

}
 
