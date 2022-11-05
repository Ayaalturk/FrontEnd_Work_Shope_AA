// let price=document.getElementById("price");
// console.log(price)

$('#btn-add').click(()=>{
let conceptName = $('#name-sel').find(":selected").val();
let price =$('#price').val();
let qun=$('#qun').val();

if(price!="" && qun !="" && conceptName !="" ){
    $('#tb-item').append('<tr > <td>'+conceptName+'</td><td>'+price+'</td><td>'+qun+'</td></tr>');
    }
});

