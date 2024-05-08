sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.cv.tproc.cvtravelprocessorv4',
            componentId: 'zc_cv_travel_processorList',
            contextPath: '/zc_cv_travel_processor'
        },
        CustomPageDefinitions
    );
});