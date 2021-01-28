
exports.viewProject = function(req, res){
    var name = req.params.name;
    console.log("The project name is: " + name);
    //make a controller call 'viewProject' avaliable for application
    res.render("project",{
        "projectName": name
    });
}