export default function getNeighborhoodsList (){
    this.x = [ 'SOMA', 'Union Square' ];
    const self = this;
    this.addNeighborhood = function add(n){
        self.x.push(n);
        return self.x;
    }
}
