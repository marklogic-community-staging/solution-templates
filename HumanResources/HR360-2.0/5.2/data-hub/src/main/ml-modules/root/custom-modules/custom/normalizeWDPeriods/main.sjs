const DataHub = require("/data-hub/5/datahub.sjs");
const datahub = new DataHub();
function main(content, options) {
  let id = content.uri;
  let context = content.context;
  let outputFormat = options.outputFormat ? options.outputFormat.toLowerCase() : datahub.flow.consts.DEFAULT_FORMAT;
  let doc = content.value;

  if (doc && (doc instanceof Document || doc instanceof XMLDocument)) {
    doc = fn.head(doc.root);
  }
  let instance = datahub.flow.flowUtils.getInstanceAsObject(doc) || {};
  let triples = datahub.flow.flowUtils.getTriplesAsObject(doc) || [];
  let headers = datahub.flow.flowUtils.getHeadersAsObject(doc) || {};

  //insert code to manipulate the instance, triples, headers, uri, context metadata, etc.
  // transform the date to ISO standard date form of YYYY-MM-DD
  instance = doc.toObject();
  let enddateString = doc.EndDatefromPeriod;
  let isoEndDate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01]', enddateString).toString().slice(0, 10));
  instance.PeriodEndDate = isoEndDate;

  //form our envelope here now, specifying our output format
  let envelope = datahub.flow.flowUtils.makeEnvelope(instance, headers, triples, outputFormat);

  //create our return content object, we have a handy helper function for creating a json scaffolding, but you
  //can also do a node-based one by using nodebuilder, especially if you're dealing with xml!
  let newContent = datahub.flow.flowUtils.createContentAsObject();

  //assign our envelope value
  newContent.value = envelope;

  //assign the uri we want, in this case the same
  newContent.uri = id;

  //assign the context we want
  newContent.context = context;

  //now let's return out our content to be written, it can be any combination of
  return newContent;
}

module.exports = {
  main: main
};
