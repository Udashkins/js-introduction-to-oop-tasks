// BEGIN
// Конструктор Point
export function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.getX = function getX() {
    return this.x;
  };
  
  Point.prototype.getY = function getY() {
    return this.y;
  };
  
  // Конструктор Segment
export function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
  }
  
  Segment.prototype.getBeginPoint = function getBeginPoint() {
    return this.beginPoint;
  };
  
  Segment.prototype.getEndPoint = function getEndPoint() {
    return this.endPoint;
  };
  
  // Функция reverse
export function reverse(segment) {
    const beginPoint = new Point(
      segment.getEndPoint().getX(),
      segment.getEndPoint().getY()
    );
    const endPoint = new Point(
      segment.getBeginPoint().getX(),
      segment.getBeginPoint().getY()
    );
    return new Segment(beginPoint, endPoint);
  }
// END
