sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/cv/tproc/cvtravelprocessorv4/test/integration/FirstJourney',
		'com/cv/tproc/cvtravelprocessorv4/test/integration/pages/zc_cv_travel_processorList',
		'com/cv/tproc/cvtravelprocessorv4/test/integration/pages/zc_cv_travel_processorObjectPage',
		'com/cv/tproc/cvtravelprocessorv4/test/integration/pages/zc_cv_booking_processorObjectPage'
    ],
    function(JourneyRunner, opaJourney, zc_cv_travel_processorList, zc_cv_travel_processorObjectPage, zc_cv_booking_processorObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/cv/tproc/cvtravelprocessorv4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezc_cv_travel_processorList: zc_cv_travel_processorList,
					onThezc_cv_travel_processorObjectPage: zc_cv_travel_processorObjectPage,
					onThezc_cv_booking_processorObjectPage: zc_cv_booking_processorObjectPage
                }
            },
            opaJourney.run
        );
    }
);