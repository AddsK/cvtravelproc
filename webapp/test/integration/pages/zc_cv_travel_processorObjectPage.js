sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.cv.tproc.cvtravelprocessorv4',
            componentId: 'zc_cv_travel_processorObjectPage',
            contextPath: '/zc_cv_travel_processor'
        },
        CustomPageDefinitions
    );
});