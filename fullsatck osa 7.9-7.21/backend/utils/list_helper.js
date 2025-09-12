const dummy = (blogs) => {
    return 1;
}
const totalLikes=(blog)=>{
    let x=0;
    const tulos = blog.reduce(
        (accumulator, currentValue) => accumulator + currentValue.likes,
        x,
    );
    return tulos;
}
module.exports = {
  dummy,totalLikes
}