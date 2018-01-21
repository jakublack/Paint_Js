(function() {
    if(!document.createElement('canvas').getContext) return;

    var sketchpad = {
        setupSidebar: function(){

            [].forEach.call(this.colors, function(color){
                color.style.background = color.dataset.color;
            }.bind(this));
        },

        init: function() {

            this.con = document.querySelector('#sketchpad');
            this.canvasCon = this.con.querySelector('.canvas');
            this.canvas = this.con.querySelector('canvas');

            this.colors = this.con.querySelectorAll('.colors div');
            this.range = this.con.querySelector('input[type="range"]');
            this.rangeOuyput = this.con.querySelector('output strong');

            this.setupSidebar();

        }
    }


    sketchpad.init();


})();