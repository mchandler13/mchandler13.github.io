var width = 400,
    height = 400;

svg = d3.select("#flash")
        .append("svg")
        .attr("width",width)
        .attr("height",height)
        .style("background-color","#000000")


svg.on("click",function(){
  x = d3.mouse(this)[0]
  y = d3.mouse(this)[1]
  var lines = svg.selectAll("line")
                  .data([1,2,3,4,5,6,7,8,9,10])
                  .enter()
                  .append("line")
                  .attr("x1",function(){
                    return x
                  })
                  .attr("y1",function(){
                    return y
                  })
                  .attr("x2",100)
                  .attr("y2",150)
                  .attr("stroke","yellow")
                  .attr("stroke-width",.5)
    console.log(x,y)
})
