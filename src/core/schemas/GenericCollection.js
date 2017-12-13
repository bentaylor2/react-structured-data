import JSONLDAbstractNode from '../JSONLDAbstractNode';

class JSONLDNodeCollection extends JSONLDAbstractNode {
  getJSON() {
    if (!!this.props.children) {
      return super.parseChildren(true);
    }
  }
}

export default JSONLDNodeCollection;
