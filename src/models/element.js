
function RestangularElement(service) {
  this.$service = service;
  this.$config = service.config;
  // route y reqParams restangularized fromServer
}

mixin(RestangularElement, RestangularBase, { chain: false });



RestangularElement.prototype.put = function (params, headers) {
  return _.bind(elemFunction, this)('put', undefined, params, undefined, headers);
};

RestangularElement.prototype.save = function (params, headers) {
  if (this[this.$config.restangularFields.fromServer]) {
    return this.put(params, headers);
  } else {
    return _.bind(elemFunction, this)('post', undefined, params, undefined, headers);
  }
};

RestangularElement.prototype.get = function (params, headers) {
  return _.bind(elemFunction, this)('get', undefined, params, undefined, headers);
};

RestangularElement.prototype.post = function (what, elem, params, headers) {
  return _.bind(elemFunction, this)('post', what, params, elem, headers);
};