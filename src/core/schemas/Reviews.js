import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Reviews extends JSONLDAbstractNode {
  getJSON() {
    return super.parseChildren();
  }
}

export default Reviews;
