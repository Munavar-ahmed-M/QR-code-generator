  const frm = document.querySelector(".form");
  const output = document.querySelector(".output");
  const spinner = document.querySelector("#loading");
  const btnSave = document.querySelector('#btn-save');
  const qrElement = document.querySelector("#qrcode");
  function generateQR(e){
    e.preventDefault();
    const url = document.querySelector("#url").value;
    const size = document.querySelector("#size").value;
    const clrdark = document.querySelector("#colorDark").value;
    const clrlight = document.querySelector("#colorLight").value;
    if(url != ""){
        //open spinner
        spinner.style.display = "flex"
        setTimeout(()=>{
            //hide spinner
            spinner.style.display = "none"
            qrElement.innerHTML = "";
            const qrcode = new QRCode('qrcode',{
                text: url,
                width:size,
                height:size,
                colorDark: clrdark,
                colorLight : clrlight,
                correctLevel : QRCode.CorrectLevel.H
            });
        },1000)
    }
  }
  frm.addEventListener("submit",generateQR);
  btnSave.addEventListener("click",(e)=>{
    setTimeout(()=>{
        const imgScr = qrElement.querySelector("img").src;
        btnSave.href = imgScr;
        btnSave.download = "qrcode";
    },50)
  })
  