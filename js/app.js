(function() {
    if(!document.createElement('canvas').getContext) return;

    var sketchpad = {

        drawLines: function(e){

            if(!this.mouseDown) return;
            
            console.log(e)
        },

        disableDrawing: function(){
            this.mouseDown = false;
        },
        enableDrawing:function(){
            this.mouseDown = true;
        },

        changePenColor: function(e) {
            this.con.querySelector('.current').classList.remove('current');
            e.target.classList.add('current');

            this.ctx.strokeStyle = e.target.dataset.color;

        },

        changePenSize: function(penSize){

            this.ctx.lineWidth = penSize;
        },

        setupCanvas: function(){

            this.canvas.width = this.canvasCon.offsetWidth;
            this.canvas.height = this.canvasCon.offsetHeight;
            this.mouseDown = false

            this.ctx = this.canvas.getContext("2d");

            this.ctx.fillStyle = '#fff';
            this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);

            this.ctx.lineWidth  =this.range.value;
            this.ctx.lineJoin = "round";
            this.ctx.lineCap = "round";
            this.ctx.strokeStyle = this.con.querySelector('.current').dataset.color;

        
            this.canvas.onmousemove = this.drawLines.bind(this);
            this.canvas.onmousedown = this.enableDrawing.bind(this);
            this.canvas.onmouseup = this.disableDrawing.bind(this);
            
        },

        setupSidebar: function(){

            [].forEach.call(this.colors, function(color){
                color.style.background = color.dataset.color;

                color.onclick = this.changePenColor.bind(this);
            }.bind(this));

            this.range.onchange = function(e) {
                this.rangeOutput.innerHTML = e.target.value;
                this.changePenSize(e.target.value)
            }.bind(this);

        },

        init: function() {

            this.con = document.querySelector('#sketchpad');
            this.canvasCon = this.con.querySelector('.canvas');
            this.canvas = this.con.querySelector('canvas');

            this.colors = this.con.querySelectorAll('.colors div');
            this.range = this.con.querySelector('input[type="range"]');
            this.rangeOutput = this.con.querySelector('output strong');

            this.setupSidebar();
            this.setupCanvas();

        }
    }

    sketchpad.init();


})();