let knex=require("knex")({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        database:"login_logout",    // The database has allready  been created. 
        password:"raja@123"
    }
})

// Here is create a Table from knex Query....!

knex.schema.createTable("UserData",(Table)=>{
    Table.increments("id").primary()
    Table.string("name").notNullable()
    Table.integer("age")
    Table.string('email')
    Table.string("password")

}).then(()=>{
    console.log("Create Table Sucsesfully...!");
}).catch(()=>{
    console.log("Table is allready exist");
})


module.exports=knex