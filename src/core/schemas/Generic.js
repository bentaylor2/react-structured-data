import JSONLDAbstractNode from '../JSONLDAbstractNode';

class ChildNode extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false) {
    const parseChildren = super.parseChildren();
    const schema = this.props.schema;
    const details = {
      '@type': this.props.jsonldtype
    }
    return isFirstChildNode
      ? Object.assign({...details, ...schema}, ...parseChildren)
      : Object.assign({[this.props.id]: { ...details, ...schema, ...parseChildren}});
  }
}

export default ChildNode;
