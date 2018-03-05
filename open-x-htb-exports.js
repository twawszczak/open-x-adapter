shellInterface.OpenXHtb = {
    adResponseCallbacks: {}
}

//? if(FEATURES.GPT_LINE_ITEMS) {
shellInterface.OpenXHtb.render = SpaceCamp.services.RenderService.renderDfpAd.bind(null, 'OpenXHtb');

/* backwards-compatible alternate function name */
shellInterface.OpenXModule = {
    render: shellInterface.OpenXHtb.render
};
//? }

if (__directInterface.Layers.PartnersLayer.Partners.OpenXHtb) {
    shellInterface.OpenXHtb = shellInterface.OpenXHtb || {};
    shellInterface.OpenXHtb.adResponseCallbacks = __directInterface.Layers.PartnersLayer.Partners.OpenXHtb.adResponseCallbacks;
}
