import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Graph extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren(true);
    return Object.assign({'@graph': parseChildren});
  }
}

export default Graph;
