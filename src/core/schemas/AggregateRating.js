import JSONLDAbstractNode from '../JSONLDAbstractNode';

class AggregateRating extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'AggregateRating',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({aggregateRating: details}, ...parseChildren);
  }
}

export default AggregateRating;
