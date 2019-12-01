import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Organization extends JSONLDAbstractNode {
    getJSON(isFirstChildNode = false, schema) {
        const parseChildren = super.parseChildren();
        const details = {
            '@type': 'Organization',
            ...schema
        }
        return isFirstChildNode ?
            Object.assign(details, ...parseChildren) :
            Object.assign({
                brand: details
            }, ...parseChildren);
    }
}

export default Organization;
