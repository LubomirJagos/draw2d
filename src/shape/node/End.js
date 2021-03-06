/**
 * @class draw2d.shape.node.End
 * A simple Node which has a InputPort. Mainly used for demo and examples.
 *
 * See the example:
 *
 *     @example preview small frame
 *
 *     let figure =  new draw2d.shape.node.End({color: "#3d3d3d"});
 *
 *     canvas.add(figure,50,10);
 *
 * @extends draw2d.shape.basic.Rectangle
 */
import draw2d from '../../packages'

draw2d.shape.node.End = draw2d.shape.basic.Rectangle.extend({

  NAME: "draw2d.shape.node.End",

  DEFAULT_COLOR: new draw2d.util.Color("#4D90FE"),

  /**
   * @constructor
   *
   * @param {Object} [attr] the configuration of the shape
   */
  init: function (attr, setter, getter) {
    this._super(extend({
      bgColor: this.DEFAULT_COLOR,
      color: this.DEFAULT_COLOR.darker(),
      width: 50,
      height: 50
    }, attr), setter, getter)

    this.createPort("input")

  }

})
