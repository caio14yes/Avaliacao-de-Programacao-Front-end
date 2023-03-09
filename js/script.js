class Stove {

    constructor(){
        this.stoveMouths = 4;
        this.stoveLightersColors = ['pink', 'blue', 'black', 'yellow', 'white'] ;
        this.stoveColor = 'red' ;
        this.stoveBrand = 'Brastemp';
        this.stoveHeight = 90;
        this.stoveWidth = 70;
        }

        showStoveProperties(){

            console.log('the stove has ' + this.stoveMouths + ' mouths ')
            console.log('the stove has ' + this.stoveLightersColors.length + ' lighters , being:')
            let i;
            for(i=0 ; i< this.stoveLightersColors.length; i++){      
                console.log(this.stoveLightersColors[i])
            }
            console.log('the stove has the ' + this.stoveBrand + ' brand')
            console.log('the stove is ' + this.stoveColor)
            console.log('the stove has ' + this.stoveHeight + 'cm of height and ' + this.stoveWidth +'cm of width')
            console.log('the oven has ' + oven.lamp + ' lamp and ' + oven.button + ' button')
            console.log('the oven glass has ' + oven.glassHeight + 'cm of height and ' + oven.glassWidth +'cm of width')
        }
        
        
    }

var stove = new Stove();

class Oven extends Stove{

    constructor(){
        super(stove);
        this.lamp = 1;
        this.button = 1;
        this.glassHeight = 50;
        this.glassWidth = 60;
    }

}

var oven = new Oven(); 