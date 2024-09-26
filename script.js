document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    /* function getRandomColor() {
         const letters = '0123456789ABCDEF';
         let color = '#';
         for (let i = 0; i < 6; i++) {
             color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
     }*/
    function getRandomColor() {


        let r = Math.floor(Math.random() * 255)

        let g = Math.floor(Math.random() * 255)

        let b = Math.floor(Math.random() * 255)
        let color = 'rgb(' + r + ',' + g + ',' + b + ')';
        return color;
    }







    changeColorBtn.addEventListener("click", function () {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
