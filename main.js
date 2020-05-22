function init() {
    $.ajax({
        url: "getPagamenti.php",
        method: "GET",
        success: function(data) {
            for (var name of data) {
                console.log(name);
                $('#priceList').append("<li>" + name + "</li><br>");
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
}

$(document).ready(init);