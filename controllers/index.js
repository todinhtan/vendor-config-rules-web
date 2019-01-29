import services from '../services';

export async function getIndex(req, res) {
  const { vendorId } = req.query;
  let rules = null;
  if (vendorId != undefined && vendorId != null) {
    rules = await services.ruleService.getRules(vendorId);
  }
  res.render('pages/index', {
    rules,
    vendorId,
  });
}

export async function saveRules(req, res) {
  if (req.body.act && req.body.act.resetPeriod) req.body.act.resetPeriod = parseInt(req.body.act.resetPeriod);
  if (req.body.noAct && req.body.noAct.days) req.body.noAct.days = parseInt(req.body.noAct.days);
  if (req.body.noAct && req.body.noAct.resetPeriod) req.body.noAct.resetPeriod = parseInt(req.body.noAct.resetPeriod);

  if (req.body.byTag) {
    if (req.body.byTag.whiteList) req.body.byTag.whiteList = req.body.byTag.whiteList.split(',');
    if (req.body.byTag.blackList) req.body.byTag.blackList = req.body.byTag.blackList.split(',');
  }

  if (req.body.blockList) req.body.blockList = req.body.blockList.split(',');

  if (req.body.vendor) {
    if (req.body.vendor.whiteList) req.body.vendor.whiteList = req.body.vendor.whiteList.split(',');
    if (req.body.vendor.blackList) req.body.vendor.blackList = req.body.vendor.blackList.split(',');
  } 

  await services.ruleService.saveRules(req.params.vendorId, req.body);
  res.redirect(req.header('Referer'));
}