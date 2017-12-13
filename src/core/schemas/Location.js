import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Location extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'AdministrativeArea',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({locationCreated: details}, ...parseChildren);
  }
}

export default Location;
