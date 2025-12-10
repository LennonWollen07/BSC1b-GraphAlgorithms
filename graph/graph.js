

class Graph {
  nodes = [];
  #currentId = 0;

  // public functions

  /**
   * called when the mouse is clicked anywhere
   * @param {Number} x 
   * @param {Number} y 
   */
  onClick(x, y) {

    // if out of bounds, return
    if(this.#outOfBOunds(x, y) || this.#nearBorder(x, y)) return;
    
    this.nodes.push({x, y})
  }

  /**
   * called at every main sketch draw
   */
  draw() {
    this.#drawNodes();
    this.#drawEdges();
  }

  // =================== Drawing Functions ===================
  /**
   * Check if (x, y) is outside canvas bounds
   * @param {Number} x 
   * @param {Number} y 
   * @return {boolean}
   */
  #outOfBOunds(x, y) {
    let outisde = false;
    if(x<0 || x>width || y<0 || y>height) outisde = true;
  }

  /**
   * @param {Number} x
   * @param {Number} y
   * @return {boolean}
   */
  #nearBorder(x, y) {
    let radius = nodeDiameter / 2;

    // distance to each border
    let distance = {left: x, top: y, right: width - x, bottom: height - y}

    // check if any of the border distances are smaller than radius
    let near = false
    if(distance.left <= radius || distance.top <= radius || 
       distance.right <= radius || distance.top <= radius) near = true

      return near;

  }

  /**
   * Check if (x, y) is inside another node
   * @param {Number} x 
   * @param {Number} y 
   * @return {boolean}
   */
  #insideNode(x, y) {
  }


  /**
   * Check if creating a node in (x, y) would make a node that overlaps with another node
   * @param {Number} x 
   * @param {Number} y 
   * @return {boolean}
   */
  #overlappingNode(x, y) {
  }

  /**
   * draw all nodes that in canvas
   */
  #drawNodes() {
    for (let node of this.nodes) {
      fill(0,0,255)
      circle(node.x, node.y, nodeDiameter)
    }
  }

  /**
   * draw all edges on canvas
   */
  #drawEdges() {
    
  }

  // =================== INTERACTIVE ELEMENTS ===================

  
  /**
   * Add new edge from selected node to node at (x, y)
   * @param {*} x 
   * @param {*} y 
   */
  #addEdge(x, y) {
    
  }

  /**
   * Add new node at (x, y)
   * @param {Number} x 
   * @param {Number} y 
   */
  #addNode(x, y) {
    
  }
}

let graph = new Graph();
