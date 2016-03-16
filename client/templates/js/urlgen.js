Template.urlGenerator.helpers({
//--- URL Helpers
    noSearchRaw: function() {return Session.set('isActive', false);},
    urlTerm: function() {if (Session.equals('termSortURL', 'fall')) {return 'fall=yes&';}if (Session.equals('termSortURL', 'spring')) {return 'spring=yes&';}if (Session.equals('termSortURL', 'summer')) {return 'summer=yes&';}       if (Session.equals('termSortURL', null)) {return;}},
    urlLocation: function() { if (Session.equals('campusSortURL', 'New York City')) {return 'nyc=yes&';}if (Session.equals('campusSortURL', 'Online')) {return 'online=yes&';}if (Session.equals('campusSortURL', 'Paris')) {return 'paris=yes&';}      if (Session.equals('campusSortURL', null)) {return;}},
    urlLibArts: function() { if (Session.equals('libArtsClickSortURL', 'LIBL')) {return 'libart=yes&';}if (Session.equals('libArtsClickSortURL', 'NLIB')) {return 'nonlibart=yes&';}if (Session.equals('libArtsClickSortURL', null)) {return;}},
    urlOpenToMajors: function() { if (Session.equals('degStudClickSortURL', 'NMO')) {return 'degstu=yes&';}if (Session.equals('degStudClickSortURL', 'NMR')) {return 'degsturest=yes&';}if (Session.equals('degStudClickSortURL', 'NMN')) {return 'majorsonly=yes&';}       if (Session.equals('degStudClickSortURL', null)) {return;}},
    urlGrad: function() {if (Session.equals('gradClickSortURL', 'grad')) {return 'grad=yes&'} else { return null;}},
    urlUgrad: function() {if (Session.equals('gradClickSortURL', 'ugrad')) { return 'ugrad=yes&'} else { return null;}}, 
    urlMonday: function() {if (Session.equals('mondayClickSortURL', 'yas')) {return 'monday=no&';} else {}},
    urlTuesday: function() {if (Session.equals('tuesdayClickSortURL', 'yas')) {return 'tuesday=no&';} else {}},
    urlWednesday: function() {if (Session.equals('wednesdayClickSortURL', 'yas')) {return 'wednesday=no&';} else {}},
    urlThursday: function() {if (Session.equals('thursdayClickSortURL', 'yas')) {return 'thursday=no&';} else {}},
    urlFriday: function() {if (Session.equals('fridayClickSortURL', 'yas')) {return 'friday=no&';} else {}},
    urlSaturday: function() {if (Session.equals('saturdayClickSortURL', 'yas')) {return 'saturday=no&';} else {}},
    urlSunday: function() {if (Session.equals('sundayClickSortURL', 'yas')) {return 'sunday=no&';} else {}}, 
    urlDept: function() { 
        var departmentChoiceURL = Session.get('departmentURL');
        if (Session.equals('departmentURL', 'All Departments')) {return
        } else if (Session.equals('departmentURL', undefined)) {return
        } else {return departmentChoiceURL;}
    },
    urlSubj: function() { 
        var subjChoiceURL = Session.get('subjURL');
        if (Session.equals('subjURL', 'All Subject Codes')) {return ;
        } else if (Session.equals('subjURL', undefined)) {return
        } else {return subjChoiceURL;}
    },
    urlTopic: function() { 
        var topicChoiceURL = Session.get('topicURL');
        if (Session.equals('topicURL', 'All Topics')) {return
        } else if (Session.equals('topicURL', undefined)) {return
        } else {return 'topic=' + topicChoiceURL + '&';}
    },
    urlSchool: function() { 
        if (Session.equals('schoolURL', 'All Divisions')) {return;
        } else if (Session.equals('schoolURL', undefined)) {return;
        } else if (Session.equals('schoolURL', 'DR')) {return '#drama'
        } else if (Session.equals('schoolURL', 'JZ')) {return '#jazz'
        } else if (Session.equals('schoolURL', 'MC')) {return '#mannes'
        } else if (Session.equals('schoolURL', 'GF')) {return '#nssr'
        } else if (Session.equals('schoolURL', 'LS')) {return '#lang'       
        } else if (Session.equals('schoolURL', 'PS')) {return '#parsons'
            } else if (Session.equals('divisionURL', 'ADHT')) {return '#adht'
            } else if (Session.equals('divisionURL', 'AMT')) {return '#art-media-tech'
            } else if (Session.equals('divisionURL', 'CON')) {return '#con-env'
            } else if (Session.equals('divisionURL', 'DS')) {return '#design-strat'
            } else if (Session.equals('divisionURL', 'FA')) {return '#fashion'
        } else if (Session.equals('schoolURL', 'NS')) {return '#public-engagement'
            } else if (Session.equals('divisionURL', 'AB')) {return '#adult-bach'
            } else if (Session.equals('divisionURL', 'CW')) {return '#creative-writing'
            } else if (Session.equals('divisionURL', 'LNGS')) {return '#languages'
            } else if (Session.equals('divisionURL', 'MS')) {return '#media-studies'
            } else if (Session.equals('divisionURL', 'MI')) {return '#milano'
        } else if (Session.equals('schoolURL', 'UL')) {return  '#liberal-arts'}
    },   
    urlFormat: function() { 
        var formatChoiceURL = Session.get('formatURL');
        if (Session.equals('formatURL', 'All Course Formats')) {return
        } else if (Session.equals('formatURL', undefined)) {return
        } else {return 'format=' + formatChoiceURL + '&';}
    },

    urlCourseCode: function() { 
        var courseCodeChoiceURL = Session.get('courseCodeURL');
        if (Session.equals('courseCodeURL', undefined)) {return ;
        } else if (Session.equals('courseCodeURL', '')) {return
        } else {return courseCodeChoiceURL + 'subj%5B%5D=';}
    },
    urlTitle: function() { 
        var titleChoiceURL = Session.get('titleURL');
        if (Session.equals('titleURL', undefined)) {return ;
        } else if (Session.equals('titleURL', '')) {return
        } else {return 'ctitle=' + titleChoiceURL + '&';}
    },
//--- Breadcrumb Helpers
    crumbSchoolURL: function() { 
        if (Session.equals('schoolURL', 'All Divisions')) {return;
        } else (Session.equals('schoolURL', undefined)) {return;
    },
    crumbTopicURL: function() { 
        var topicChoiceURL = Session.get('topicURL');
        if (Session.equals('topicURL', 'All Topics')) {return
        } else if (Session.equals('topicURL', undefined)) {return
        } else {return topicChoiceURL;}
    },
    crumbSubjURL: function() { 
        subjChoiceURL = Session.get('subjURL');
        if (Session.equals('subjURL', 'All Subject Codes')) {
            return
        } else if (Session.equals('subjURL', undefined)) {
            return
        } else {
            var subjChoiceURL = subjChoiceURL.replace(/subj/g, '')
            var subjChoiceURL = subjChoiceURL.replace(/&/g, ', ')
            var subjChoiceURL = subjChoiceURL.replace(/%5B%5D=/g, '')
            return subjChoiceURL
        }
    },
    crumbDeptURL: function() { 
        var departmentChoiceURL = Session.get('departmentURL')
        if (Session.equals('departmentURL', 'All Departments')) {
            return
        } else if (Session.equals('departmentURL', undefined)) {
            return
        } else {
            var departmentChoiceURL = departmentChoiceURL.replace(/department/g, '')
            var departmentChoiceURL = departmentChoiceURL.replace(/&/g, ', ')
            var departmentChoiceURL = departmentChoiceURL.replace(/%5B%5D=/g, '')
            return departmentChoiceURL
        }
    },
    crumbTermURL: function() { 
        if (Session.equals('termSortURL', 'fall')) { return 'Fall'}
        if (Session.equals('termSortURL', 'spring')) {return 'Spring'}
        if (Session.equals('termSortURL', 'summer')) {return 'Summer'}        
        if (Session.equals('termSortURL', null)) {return}
    },
    crumbLocationURL: function() { 
        if (Session.equals('campusSortURL', 'New York City')) {return 'New York City'}
        if (Session.equals('campusSortURL', 'Online')) {return 'Online'}
        if (Session.equals('campusSortURL', 'Paris')) {return 'Paris'}        
        if (Session.equals('campusSortURL', null)) {return}
    },
    crumbLibArtsURL: function() { 
        if (Session.equals('libArtsClickSortURL', 'LIBL')) {return 'Liberal Arts'}
        if (Session.equals('libArtsClickSortURL', 'NLIB')) {return 'Non-Liberal Arts'}
        if (Session.equals('libArtsClickSortURL', null)) {return}
    },
    crumbOpenToMajorsURL: function() { 
        if (Session.equals('degStudClickSortURL', 'NMO')) {return 'Degree Students'}
        if (Session.equals('degStudClickSortURL', 'NMR')) {return 'Degree Students with Restrictions'}
        if (Session.equals('degStudClickSortURL', 'NMN')) {return 'Majors Only'}       
        if (Session.equals('degStudClickSortURL', null)) {return}
    },
    crumbFormatURL: function() { 
        var formatChoiceURL = Session.get('formatURL');
        if (Session.equals('formatURL', 'All Course Formats')) {return
        } else if (Session.equals('formatURL', undefined)) {return
        } else {return formatChoiceURL}
    },

    crumbCourseCodeURL: function() { 
        var courseCodeChoiceURL = Session.get('courseCodeURL');
        if (Session.equals('courseCodeURL', undefined)) {return
        } else if (Session.equals('courseCodeURL', '')) {return
        } else {
            var courseCodeChoiceURL = courseCodeChoiceURL.replace(/_id/g, '')
            var courseCodeChoiceURL = courseCodeChoiceURL.replace(/&/g, ', ')
            var courseCodeChoiceURL = courseCodeChoiceURL.replace(/%5B%5D=/g, '')
            return courseCodeChoiceURL;
        }
    },
    crumbTitleURL: function() { 
        var titleChoiceURL = Session.get('titleURL');
        if (Session.equals('titleURL', undefined)) {return
        } else if (Session.equals('titleURL', '')) {return
        } else {
            var titleChoiceURL = titleChoiceURL.replace(/%20/g, ' ')
            return titleChoiceURL;}
    },
//--- Selector Helpers
    isMondayActive: function() { if (Session.equals('mondayClickSortURL', 'yas')) { return "fa-times eliminated-text";} else {return "fa-check-square-o";}},
    isTuesdayActive: function() {if (Session.equals('tuesdayClickSortURL', 'yas')) {return "fa-times eliminated-text";} else {return "fa-check-square-o";}},
    isWednesdayActive: function() {if (Session.equals('wednesdayClickSortURL', 'yas')) { return "fa-times eliminated-text";} else { return "fa-check-square-o";}},
    isThursdayActive: function() {if (Session.equals('thursdayClickSortURL', 'yas')) { return "fa-times eliminated-text";} else { return "fa-check-square-o"; }},
    isFridayActive: function() {if (Session.equals('fridayClickSortURL', 'yas')) { return "fa-times eliminated-text";} else { return "fa-check-square-o"; }},
    isSaturdayActive: function() {if (Session.equals('saturdayClickSortURL', 'yas')) { return "fa-times eliminated-text";} else { return "fa-check-square-o"; }},
    isSundayActive: function() {if (Session.equals('sundayClickSortURL', 'yas')) { return "fa-times eliminated-text";} else { return "fa-check-square-o";}},   
    isLibArtsActive: function() { if (Session.equals('libArtsClickSortURL', 'LIBL')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isNonLibArtsActive: function() { if (Session.equals('libArtsClickSortURL', 'NLIB')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},   
    isGradActive: function() { if (Session.equals('gradClickSortURL', 'grad')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isUGradActive: function() { if (Session.equals('gradClickSortURL', 'ugrad')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isFallUrl: function() { if (Session.equals('termSortURL', 'fall')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isSpringUrl: function() { if (Session.equals('termSortURL', 'spring')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isSummerUrl: function() { if (Session.equals('termSortURL', 'summer')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isDegStudActive: function() { if (Session.equals('degStudClickSortURL','NMO')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isDegStudResActive: function() { if (Session.equals('degStudClickSortURL','NMR')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
    isMajorsActive: function() { if (Session.equals('degStudClickSortURL','NMN')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
});

Template.urlGenerator.events({
//--- Advanced Sort
    'change .campus-selectURL': function(campEvt) {
        var newCampus = $(campEvt.target).val()
        Session.set('campusSortURL', newCampus)
        if (Session.equals('campusSortURL', 'All Campuses')) { Session.set('campusSortURL', null) }
    },
    'change .department-selectURL': function(deptEvt) {
        var newDepartment = $(deptEvt.target).val()
        var newDepartment = newDepartment.join('')
        Session.set('departmentURL', newDepartment)
    },
    'change .subj-selectURL': function(subjEvt) {
        var newsubj = $(subjEvt.target).val()
        var newsubj = newsubj.join('')
        Session.set('subjURL', newsubj)
    },
    'change .topic-selectURL': function(topicEvt) {var newtopic = $(topicEvt.target).val();
        Session.set('topicURL', newtopic);  },
    'change .format-selectURL': function(formatEvt) {var newformat = $(formatEvt.target).val();
        Session.set('formatURL', newformat);  },
    'change .school-selectURL': function(schoolEvt) { 
        var exampleURL = $(schoolEvt.target).val();
        //Session.set('schoolURL', exampleURL);
        if (exampleURL === 'All Divisions') {
            return ;
        } else if (exampleURL === 'PS') {
            Session.set('schoolURL', 'PS');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'ADHT') {
            Session.set('divisionURL', 'ADHT');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'AMT') {
            Session.set('divisionURL', 'AMT');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'CON') {
            Session.set('divisionURL', 'CON');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'DS') {
            Session.set('divisionURL', 'DS');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'FA') {
            Session.set('divisionURL', 'FA');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'LS') {
            Session.set('schoolURL', 'LS');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'MC') {
            Session.set('schoolURL', 'MC');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'JZ') {
            Session.set('schoolURL', 'JZ');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'DR') {
            Session.set('schoolURL', 'DR');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'GF') {
            Session.set('schoolURL', 'GF');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'NS') {
            Session.set('schoolURL', 'NS');
            Session.set('divisionURL', null);
        } else if (exampleURL === 'AB') {
            Session.set('divisionURL', 'AB');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'CW') {
            Session.set('divisionURL', 'CW');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'LNGS') {
            Session.set('divisionURL', 'LNGS');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'MS') {
            Session.set('divisionURL', 'MS');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'MI') {
            Session.set('divisionURL', 'MI');
            Session.set('schoolURL', null);
        } else if (exampleURL === 'UL') {
            Session.set('schoolURL', 'UL');
            Session.set('divisionURL', null);
        } else {
            return;
        };
    },  
    'click .ccExMonday': function() { if(Session.equals('mondayClickSortURL', 'yas')) {Session.set('mondayClickSortURL', null);   } else { Session.set('mondayClickSortURL', 'yas');}},
    'click .ccExTuesday': function() {if(Session.equals('tuesdayClickSortURL', 'yas')) {Session.set('tuesdayClickSortURL', null);   } else { Session.set('tuesdayClickSortURL', 'yas');}},
    'click .ccExWednesday': function() {if(Session.equals('wednesdayClickSortURL', 'yas')) {Session.set('wednesdayClickSortURL', null);   } else { Session.set('wednesdayClickSortURL', 'yas');}},
    'click .ccExThursday': function() {if(Session.equals('thursdayClickSortURL', 'yas')) {Session.set('thursdayClickSortURL', null);   } else { Session.set('thursdayClickSortURL', 'yas');}},
    'click .ccExFriday': function() {if(Session.equals('fridayClickSortURL', 'yas')) {Session.set('fridayClickSortURL', null);   } else { Session.set('fridayClickSortURL', 'yas');}},
    'click .ccExSaturday': function() {if(Session.equals('saturdayClickSortURL', 'yas')) {Session.set('saturdayClickSortURL', null);   } else { Session.set('saturdayClickSortURL', 'yas');}},
    'click .ccExSunday': function() {if(Session.equals('sundayClickSortURL', 'yas')) {Session.set('sundayClickSortURL', null);   } else { Session.set('sundayClickSortURL', 'yas');}},
    'click .ccExSLibArts': function () {Session.set('libArtsClickSortURL', 'LIBL');},
    'click .ccExNonLibArts': function () {Session.set('libArtsClickSortURL', 'NLIB');},
    'click .reset-lib-arts': function () {Session.set('libArtsClickSortURL', null);},
    'click .urlFall': function () {Session.set('termSortURL', 'fall');},
    'click .urlSpring': function () {Session.set('termSortURL', 'spring');},
    'click .urlSummer': function () {Session.set('termSortURL', 'summer');},
    'click .reset-term': function () {Session.set('termSortURL', null);},    
    'click .ccExGrad': function () {Session.set('gradClickSortURL', 'grad');},
    'click .ccExUGrad': function () {Session.set('gradClickSortURL', 'ugrad');},
    'click .reset-grad': function () {Session.set('gradClickSortURL', null);},
    'click .ccExDegStud': function () {Session.set('degStudClickSortURL', 'NMO');},
    'click .ccExDegStudRest': function () {Session.set('degStudClickSortURL', 'NMR');},
    'click .ccExMajorsOnly': function () {Session.set('degStudClickSortURL', 'NMN');},
    'click .reset-degree': function () {Session.set('degStudClickSortURL', null);},

    'change .courseCode-typeURL': function(courseCodeEvt) { 
        courseCodes = [];
        var newCourseCodeURL = $(courseCodeEvt.target).val();
        var courseCodeArray = newCourseCodeURL.split(',');
        courseCodeArray.forEach(function(shrimp) {
            var codeItem = '_id%5B%5D=' + shrimp + '&';
            codeItem = codeItem.replace(/\s+/g, '');
            console.log(codeItem);
            courseCodes.push(codeItem);
        });
        courseCodes.toString();
        var courseCodes = courseCodes.join('');
        Session.set('courseCodeURL', courseCodes); 
    },
    'change .title-typeURL': function(titleEvt) { 
        titleEvt.preventDefault();
        var newTitleURL = $(titleEvt.target).val();
        var newTitleURL = newTitleURL.replace(/\s+/g, '%20');
        Session.set('titleURL', newTitleURL);
        console.log(Session.get('titleURL'));
    },
//--- Reset Functionality
    'click .reset-everything': function () {
        Session.set('mondayClickSortURL', null);
        Session.set('tuesdayClickSortURL', null);
        Session.set('wednesdayClickSortURL', null);
        Session.set('thursdayClickSortURL', null);
        Session.set('fridayClickSortURL', null);
        Session.set('saturdayClickSortURL', null);
        Session.set('sundayClickSortURL', null);
        Session.set('degStudClickSortURL', null);
        Session.set('gradClickSortURL', null);
        Session.set('libArtsClickSortURL', null);
        Session.set('termSortURL', null);
        Session.set('schoolURL', undefined);
        Session.set('divisionURL', undefined);
        Session.set('formatURL', undefined);
        Session.set('subjURL', undefined);
        Session.set('topicURL', undefined);
        Session.set('departmentURL', undefined);
        Session.set('campusSortURL', undefined);
        Session.set('courseCodeURL', undefined);
        Session.set('titleURL', undefined);
    },
    'click .crumb-school-reset': function () {Session.set('schoolURL', undefined); Session.set('divisionURL', undefined);},
    'click .crumb-dept-reset': function () {Session.set('departmentURL', undefined);},
    'click .crumb-subj-reset': function () {Session.set('subjURL', undefined);},
    'click .crumb-format-reset': function () {Session.set('formatURL', undefined);},
    'click .crumb-location-reset': function () {Session.set('campusSortURL', undefined);},
    'click .crumb-topic-reset': function () {Session.set('topicURL', undefined);},
    'click .crumb-monday-reset': function () {Session.set('mondayClickSortURL', undefined);},
    'click .crumb-tuesday-reset': function () {Session.set('tuesdayClickSortURL', undefined);},
    'click .crumb-wednesday-reset': function () {Session.set('wednesdayClickSortURL', undefined);},
    'click .crumb-thursday-reset': function () {Session.set('thursdayClickSortURL', undefined);},
    'click .crumb-friday-reset': function () {Session.set('fridayClickSortURL', undefined);},
    'click .crumb-saturday-reset': function () {Session.set('saturdayClickSortURL', undefined);},
    'click .crumb-sunday-reset': function () {Session.set('sundayClickSortURL', undefined);},
    'click .crumb-coursecode-reset': function () {Session.set('courseCodeURL', undefined);},
    'click .crumb-title-reset': function () {Session.set('titleURL', undefined);}
});