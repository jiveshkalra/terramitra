function toggleVideo() {
  document.querySelector("video").play();
}
addEventListener("mousemove", (event) => {
  setTimeout(toggleVideo, 1000);
});






var pd = []
var a = `<div style="zoom: 2;"> <div class="single_product shadow text-center py-2 px-3"> <div class="product_img"> <a href="#"> <img onclick='sq("`
var q = `")' src="assets/images/`
var b = `" class="img img-fluid" alt=""></a> <div class="new_product"> <span class="badge py-1 px-1 badge-pill badge-danger">New</span> </div> </div> <div class="product-caption my-1"> <h5> <a`
var g = `>`
var h = `</a></h5><div class="price"> <b><span class="mr-1">₹</span><span>`
var i = `</span></b> </div> </div> </div> </div> <span>  </span><p><p><br>`
function clm() {
  if (document.getElementById("eml_lgn").value == '' || document.getElementById("psw_lgn").value == '') { alert('incorrect email or password'); return }
  document.getElementById("hi").innerHTML = document.getElementById("eml_lgn").value.split("@")[0]; document.getElementById("id01").style.display = "none"
}

function createproduct(ny, div) {
  this.ob = [ny.img, ny.pdname, ny.rs, ny.athr]
  this.s = a + this.ob + q + ny.img + b + g + ny.pdname + h + ny.rs + i
  this.dv = document.getElementById(div)
  this.dv.innerHTML = this.dv.innerHTML + this.s
}
var cont = [
  {
    img: 'IMG_0515.jpg',
    pdname: 'Terra Mitra',
    rs: '4000',
    athr: 'Description - Product for farmers to help with soil analysis.'
  },
  {
    img: 'IMG_0515.jpg',
    pdname: 'Terra Mitra variant-online',
    rs: '5000',
    athr: 'Description - Product for farmers to help with soil analysis.'
  }
]
window.onload = function() {

  for (let i = 0; i < cont.length; i++) {
    createproduct(cont[i], 'products')
  }
}
function submitted() {
  this.fn = document.getElementById('firstName').value
  this.ln = document.getElementById('lastName').value
  this.phn = document.getElementById('form18').value
  this.email = document.getElementById('form19').value
  this.cnt = document.getElementById('form11').value
  this.ad1 = document.getElementById('form14').value
  this.ad2 = document.getElementById('form15').value
  this.zip = document.getElementById('form16').value
  this.cty = document.getElementById('form17').value
  this.info = document.getElementById('form76').value
  this.av = [[pd], [this.fn], [this.ln], [this.phn], [this.email], [this.cnt], [this.ad1], [this.ad2], [this.zip], [this.cty], [this.info]]
  window.location.href = "https://artisteindia.me/order_confirmation.html"

}

function sq(aser) {
  console.log(aser)
  this.img = document.getElementById('imge')
  this.pdnme = document.getElementById('pdnme')
  this.price = document.getElementById('cash')
  this.author = document.getElementById('descr')
  console.log(this.img, this.pdnme)
  this.c = aser.split(',')
  this.img.src = 'assets/images/' + this.c[0]
  this.pdnme.innerText = this.c[1]
  this.price.innerHTML = this.c[2]
  this.author.innerHTML = this.c[3]
  this.final_cost = document.getElementById('finalcost')
  this.final_cost.innerHTML = this.c[2]
  this.ftp = document.getElementById('fpt')
  this.ftp.innerHTML = this.c[1]
  document.getElementById('prd_dtl').style.height = 'auto'
  document.getElementById('home').style.height = '0px'
}
function cls_pd() {
  document.getElementById('prd_dtl').style.height = '0px'
  document.getElementById('home').style.height = 'auto'
}
document.getElementById('as').style.position = 'relative'
document.getElementById('as').style.top = '0px'
document.getElementById('as').style.left = '95%'
document.getElementById('as').style.width = '5%'
document.getElementById('as').style.height = '5%'

document.getElementById('ase').style.position = 'relative'
document.getElementById('ase').style.top = '0px'
document.getElementById('ase').style.left = '95%'
document.getElementById('ase').style.width = '5%'
document.getElementById('ase').style.height = '5%'

var ww = window.innerWidth

window.addEventListener('resize', function() { ww = window.innerWidth; document.getElementById('chekot').style.width = ww; })
function cls_bd() {
  document.getElementById('chekot').style.height = '0px'
  document.getElementById('prd_dtl').style.height = 'auto'
}


function bn() {
  document.getElementById('prd_dtl').style.height = '0px'
  document.getElementById('chekot').style.height = 'auto'
}
