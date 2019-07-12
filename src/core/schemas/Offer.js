import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Offer extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Offer',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({offer: details}, ...parseChildren);
  }
}

export default Offer;
