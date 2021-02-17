class calculations{
    constructor(x,y,xy) {
        this.x = x;
        this.y = y;
        this.xy = xy;
    }

    GetResults(){
        return this.xy(this.x,this.y)
    }
}
module.exports = calculations;