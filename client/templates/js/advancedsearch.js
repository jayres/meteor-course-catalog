Session.setDefault('advancedCollapse', false);
Template.advancedSearch.rendered = function (){$('#accordion-adv').find('.accordion-toggle-adv').click(function(){$(this).next().slideToggle();$(".accordion-content-adv").not($(this).next()).slideUp('fast');});}
Template.advancedSearch.helpers({ 
//--- Advanced Collapse
collapseHelper: function() {if (Session.equals('advancedCollapse', true)) { return "in" } else { return "" }},
//--- Advanced Search 
isMondayActive: function() { if (Session.equals('mondayClickSort', null)) { return "fa-times eliminated-text";} else {return "fa-check-square-o";}},
isTuesdayActive: function() {if (Session.equals('tuesdayClickSort', null)) {return "fa-times eliminated-text";} else {return "fa-check-square-o";}},
isWednesdayActive: function() {if (Session.equals('wednesdayClickSort', null)) { return "fa-times eliminated-text";} else { return "fa-check-square-o";}},
isThursdayActive: function() {if (Session.equals('thursdayClickSort', null)) { return "fa-times eliminated-text";} else { return "fa-check-square-o"; }},
isFridayActive: function() {if (Session.equals('fridayClickSort', null)) { return "fa-times eliminated-text";} else { return "fa-check-square-o"; }},
isSaturdayActive: function() {if (Session.equals('saturdayClickSort', null)) { return "fa-times eliminated-text";} else { return "fa-check-square-o"; }},
isSundayActive: function() {if (Session.equals('sundayClickSort', null)) { return "fa-times eliminated-text";} else { return "fa-check-square-o";}},
isLibArtsActive: function() { if (Session.equals('libArtsClickSort', 'LIBL')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
isNonLibArtsActive: function() { if (Session.equals('libArtsClickSort', 'NLIB')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
isGradActive: function() { if (Session.equals('gradClickSort', null)) { return "fa-times eliminated-text";} else {return "fa-check-square-o";}},
isUGradActive: function() { if (Session.equals('uGradClickSort', null)) { return "fa-times eliminated-text";} else {return "fa-check-square-o";}},
isDegStudActive: function() { if (Session.equals('degStudClickSort','NMO')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
isDegStudResActive: function() { if (Session.equals('degStudClickSort','NMR')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
isMajorsActive: function() { if (Session.equals('degStudClickSort','NMN')) {return "fa-dot-circle-o";} else {return "fa-circle-o";}},
beforeNineActive: function() {if (Session.equals('timeOfDayGreat', '0000') && Session.equals('timeOfDayLess', '0899')) { return "fa-dot-circle-o";} else {return "fa-circle-o";} },
nineToTwelveActive: function() {if (Session.equals('timeOfDayGreat', '0900')) {return "fa-dot-circle-o";} else {return "fa-circle-o";} },
twelveToThreeActive: function() {if (Session.equals('timeOfDayGreat', '1200')) { return "fa-dot-circle-o";} else {return "fa-circle-o";} },
threeToSixActive: function() {if (Session.equals('timeOfDayGreat', '1500')) { return "fa-dot-circle-o";} else {return "fa-circle-o";} },
afterSixActive: function() {if (Session.equals('timeOfDayGreat', '1800')) { return "fa-dot-circle-o";} else {return "fa-circle-o";} },
//--- COURSE STATUS UI
openStatusActive: function() {if (Session.equals('courseStatusUI', 'open')) { return "fa-dot-circle-o";} else {return "fa-circle-o";}},
//--- EasySearch Counting Function
searchCount: function() {Session.setDefault('totalResults', 0); var instance = EasySearch.getComponentInstance({ id : 'search', index : 'courses' }); instance.on('total', function (val) { Session.set('totalResults', val);});if (Session.equals('totalResults', 0)) {return} else if (Session.equals('totalResults', undefined)) {return} else { return "Search Results: " + Session.get('totalResults');}},
//--- Breadcrumb Helpers
isMondayActiveCrumb: function() { if (Session.equals('mondayClickSort', null)) { return true;} else { return false;}},
isTuesdayActiveCrumb: function() {if (Session.equals('tuesdayClickSort', null)) { return true;} else { return false;}},
isWednesdayActiveCrumb: function() {if (Session.equals('wednesdayClickSort', null)) { return true;} else { return false;}},
isThursdayActiveCrumb: function() {if (Session.equals('thursdayClickSort', null)) { return true;} else { return false;}},
isFridayActiveCrumb: function() {if (Session.equals('fridayClickSort', null)) { return true;} else { return false;}},
isSaturdayActiveCrumb: function() {if (Session.equals('saturdayClickSort', null)) { return true;} else { return false;}},
isSundayActiveCrumb: function() {if (Session.equals('sundayClickSort', null)) { return true;} else { return false;}},
crumbDivision: function() {
if (Session.equals('collegeSort', 'All Schools')) {return false
} else if (Session.equals('divisionSort', undefined)) {return false
} else if (Session.equals('divisionSort', 'Art and Design History and Theory')) {return 'Art and Design History and Theory'
} else if (Session.equals('divisionSort', 'Art, Media and Technology')) {return 'Art, Media and Technology'
} else if (Session.equals('divisionSort', 'Constructed Environments')) {return 'Constructed Environments'
} else if (Session.equals('divisionSort', 'Design Strategies')) {return 'Design Strategies'
} else if (Session.equals('divisionSort', 'Fashion')) {return 'Fashion'
} else if (Session.equals('divisionSort', 'Adult Bachelor\'s')) {return 'Adult Bachelors'
} else if (Session.equals('divisionSort', 'Creative Writing')) {return 'Creative Writing'
} else if (Session.equals('divisionSort', 'Languages')) {return  'Languages'
} else if (Session.equals('divisionSort', 'Media Studies')) {return  'Media Studies'
} else if (Session.equals('divisionSort', 'Milano')) {return  'Milano'
}},
isGradActiveCrumb: function() { if (Session.equals('gradClickSort', null)) { return true} else { return false}},
isUGradActiveCrumb: function() { if (Session.equals('uGradClickSort', null)) { return true} else { return false}},
isOpenStatusCrumb: function() { if (Session.equals('courseStatusUI', 'open')) { return true} else { return false}},
crumbTopicURL: function() { var topicChoiceURL = Session.get('topicQuery');var topicChoiceString = String(topicChoiceURL);if (topicChoiceString === '[object Object]') {return false } else if (Session.equals('topicQuery', undefined)) {return false} else { return 'Topic: ' + topicChoiceURL; }},
crumbSubjURL: function() { var subjChoiceURL = Session.get('subjectCodeQuery');var subjChoiceString = String(subjChoiceURL);if (subjChoiceString === '[object Object]') {return false } else if (Session.equals('subjectCodeQuery', undefined)) {return false} else { return 'Subject Code: ' + subjChoiceURL; }},
crumbDeptURL: function() {var departmentChoiceURL = Session.get('departmentCrumb');var deptChoiceString = String(departmentChoiceURL);if (deptChoiceString === '[object Object]') {return false;} else if (Session.equals('departmentCrumb', undefined)) {return false} else {return 'Department: ' + departmentChoiceURL;}},
crumbFormatURL: function() { var formatChoiceURL = Session.get('courseFormatQuery');var formatChoiceString = String(formatChoiceURL);if (formatChoiceString === '[object Object]') {return false} else if (Session.equals('courseFormatQuery', undefined)) {return} else {return 'Course Format: ' + formatChoiceURL;}},
crumbTerm: function() {
	var termSession = Session.get('termSort')
	var termSession = termSession.toString().substr(0,3)
	if (termSession === 'Fal') {
		return 'Fall ' + Session.get('faTrmBc')
	} else if (termSession === 'Spr') {
		return 'Spring ' + Session.get('spTrmBc')
	} else if (termSession === 'Sum') {
		return 'Summer ' + Session.get('suTrmBc')
	} else {
		return false
	}
},
crumbLocation: function() { if (Session.equals('campusSort', 'New York City')) {return 'New York City';} else if (Session.equals('campusSort', 'Online')) {return 'Online';} else if (Session.equals('campusSort', 'Paris')) {return 'Paris';} else {return false;}},
crumbLibArts: function() { if (Session.equals('libArtsClickSort', 'LIBL')) {return 'Liberal Arts';}else if (Session.equals('libArtsClickSort', 'NLIB')) {return 'Non-Liberal Arts';}else {return false;}},
crumbOpenToMajors: function() { if (Session.equals('degStudClickSort', 'NMO')) {return 'Degree Students';}else if (Session.equals('degStudClickSort', 'NMR')) {return 'Degree Students with Restrictions';}else if (Session.equals('degStudClickSort', 'NMN')) {return 'Majors Only';}else {return false;}},
crumbTime: function() {if ( Session.equals('timeOfDayGreat', '0000') && Session.equals('timeOfDayLess', '0899') ) {return 'Before 9:00 a.m.';}else if (Session.equals('timeOfDayGreat', '0900') && Session.equals('timeOfDayLess', '1200') ) {return '9:00 a.m. - 12:00 p.m.';}else if (Session.equals('timeOfDayGreat', '1200') && Session.equals('timeOfDayLess', '1500') ) {return '12:00 p.m. - 3:00 p.m.';}else if (Session.equals('timeOfDayGreat', '1500') && Session.equals('timeOfDayLess', '1800') ) {return '3:00 p.m. - 6:00 p.m.';}else if (Session.equals('timeOfDayGreat', '1800') && Session.equals('timeOfDayLess', '2400') ) {return 'After 6:00 p.m.';}else {return false;}},
});
Template.advancedSearch.events({
//--- Store Session for Advanced Search to remain open during refresh
'click .adv-search-btn': function() { if(Session.equals('advancedCollapse', false)) { Session.set('advancedCollapse', true);} else { Session.set('advancedCollapse', false);}},
//--- Advanced Sort
'click .course-status': function() {
	var instance = EasySearch.getComponentInstance({ 
		index: 'courses', id: 'search'
	});
	Session.set('courseStatus', {$gte: 1});
	Session.set('courseStatusUI', 'open');
	EasySearch.changeProperty('courses', 'filteredOpen',  {$gte: 1});
	instance.triggerSearch();
},
'click .course-status-reset': function () {
	var instance = EasySearch.getComponentInstance({ 
		index: 'courses', id: 'search'
	});
	Session.set('courseStatus', {$ne: ''});
	Session.set('courseStatusUI', null);
	EasySearch.changeProperty('courses', 'filteredOpen', {$ne: ''});
	instance.triggerSearch();
},
'change .campus-select': function(campEvt) {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});var newCampus = $(campEvt.target).val();Session.set('campusSort', newCampus);EasySearch.changeProperty('courses', 'filteredCampus', newCampus);instance.triggerSearch();if (Session.equals('campusSort', 'All Campuses')) {Session.set('campusSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredCampus', {$ne : ''});instance.triggerSearch();}},
'click .ccExMonday': function() { var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('mondayClickSort', null)) { Session.set('mondayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredMon', {$ne : ''});instance.triggerSearch();} else { Session.set('mondayClickSort', null);EasySearch.changeProperty('courses', 'filteredMon', null);instance.triggerSearch();}},
'click .ccExTuesday': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('tuesdayClickSort', null)) { Session.set('tuesdayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredTue', {$ne : ''});instance.triggerSearch();} else {Session.set('tuesdayClickSort', null);EasySearch.changeProperty('courses', 'filteredTue', null);instance.triggerSearch();}},
'click .ccExWednesday': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('wednesdayClickSort', null)) { Session.set('wednesdayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredWed', {$ne : ''});instance.triggerSearch();} else {Session.set('wednesdayClickSort', null);EasySearch.changeProperty('courses', 'filteredWed', null);instance.triggerSearch();}},
'click .ccExThursday': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('thursdayClickSort', null)) { Session.set('thursdayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredThu', {$ne : ''});instance.triggerSearch();} else {Session.set('thursdayClickSort', null);EasySearch.changeProperty('courses', 'filteredThu', null);instance.triggerSearch();}},
'click .ccExFriday': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('fridayClickSort', null)) { Session.set('fridayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredFri', {$ne : ''});instance.triggerSearch();} else {Session.set('fridayClickSort', null);EasySearch.changeProperty('courses', 'filteredFri', null);instance.triggerSearch();}},
'click .ccExSaturday': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if( Session.equals('saturdayClickSort', null)) { Session.set('saturdayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredSat', {$ne : ''});instance.triggerSearch();} else {Session.set('saturdayClickSort', null);EasySearch.changeProperty('courses', 'filteredSat', null);instance.triggerSearch();}},   
'click .ccExSunday': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('sundayClickSort', null)) { Session.set('sundayClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredSun', {$ne : ''});instance.triggerSearch();} else {Session.set('sundayClickSort', null);EasySearch.changeProperty('courses', 'filteredSun', null);instance.triggerSearch();}},
'click .ccExSLibArts': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('libArtsClickSort', 'LIBL');EasySearch.changeProperty('courses', 'filteredLibart', 'LIBL');instance.triggerSearch();},
'click .ccExNonLibArts': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('libArtsClickSort', 'NLIB');EasySearch.changeProperty('courses', 'filteredLibart', 'NLIB');instance.triggerSearch();},
'click .reset-lib-arts': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('libArtsClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredLibart', {$ne : ''});instance.triggerSearch();}, 
'click .ccExGrad': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('gradClickSort', null)) {Session.set('gradClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredGrad', {$ne : ''});instance.triggerSearch();} else {Session.set('gradClickSort', null);EasySearch.changeProperty('courses', 'filteredGrad', null);instance.triggerSearch();}},
'click .ccExUGrad': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});if(Session.equals('uGradClickSort', null)) {Session.set('uGradClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredUgrad', {$ne : ''});instance.triggerSearch();} else {Session.set('uGradClickSort', null);EasySearch.changeProperty('courses', 'filteredUgrad', null);instance.triggerSearch();}},
'click .ccAllDegStud': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('degStudClickSort', {$ne : ''});EasySearch.changeProperty('courses', 'filteredAttr', {$ne : ''});instance.triggerSearch();},
'click .ccExDegStud': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('degStudClickSort', 'NMO');EasySearch.changeProperty('courses', 'filteredAttr', 'NMO');instance.triggerSearch();},
'click .ccExDegStudRest': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('degStudClickSort', 'NMR');EasySearch.changeProperty('courses', 'filteredAttr', 'NMR');instance.triggerSearch();},
'click .ccExMajorsOnly': function () {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('degStudClickSort', 'NMN');EasySearch.changeProperty('courses', 'filteredAttr', 'NMN');instance.triggerSearch();},
'change .department-select': function(deptEvt) {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});var newDept = $(deptEvt.target).val();var newDeptDesc = $(deptEvt.target).find(':selected').data("id");Session.set('departmentQuery', newDept);Session.set('departmentCrumb', newDeptDesc);EasySearch.changeProperty('courses', 'filteredDept', newDept);instance.triggerSearch();if (Session.equals('departmentQuery', 'All Departments')) {Session.set('departmentQuery', {$ne : ''});EasySearch.changeProperty('courses', 'filteredDept', {$ne : ''});instance.triggerSearch();}},
'change .subject-select': function(subjEvt) {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});var newSubj = $(subjEvt.target).val();Session.set('subjectCodeQuery', newSubj);EasySearch.changeProperty('courses', 'filteredSubj', newSubj);instance.triggerSearch();if (Session.equals('subjectCodeQuery', 'All Subject Codes')) {Session.set('subjectCodeQuery', {$ne : ''});EasySearch.changeProperty('courses', 'filteredSubj', {$ne : ''});instance.triggerSearch();}},
'change .format-select': function(formatEvt) {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'}); var newFormat = $(formatEvt.target).val();Session.set('courseFormatQuery', newFormat);EasySearch.changeProperty('courses', 'filteredFormat', newFormat);instance.triggerSearch();if (Session.equals('courseFormatQuery', 'All Course Formats')) {Session.set('courseFormatQuery', {$ne : ''});EasySearch.changeProperty('courses', 'filteredFormat', {$ne : ''});instance.triggerSearch();}},
'click .beforeNine': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('timeOfDayGreat', '0000');Session.set('timeOfDayLess', '0899');EasySearch.changeProperty('courses', 'filteredTime',  {$gte: '0000', $lte: '0899'});instance.triggerSearch();},
'click .nineToTwelve': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('timeOfDayGreat', '0900');Session.set('timeOfDayLess', '1200');EasySearch.changeProperty('courses', 'filteredTime',  {$gte: '9000', $lte: '1200'});instance.triggerSearch();},
'click .twelveToThree': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('timeOfDayGreat', '1200');Session.set('timeOfDayLess', '1500');EasySearch.changeProperty('courses', 'filteredTime',  {$gte: '1200', $lte: '1500'});instance.triggerSearch();},
'click .threeToSix': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('timeOfDayGreat', '1500');Session.set('timeOfDayLess', '1800');EasySearch.changeProperty('courses', 'filteredTime',  {$gte: '1500', $lte: '1800'});instance.triggerSearch();},
'click .afterSix': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('timeOfDayGreat', '1800');Session.set('timeOfDayLess', '2400');EasySearch.changeProperty('courses', 'filteredTime',  {$gte: '1800', $lte: '2400'});instance.triggerSearch();},
'click .ccAllTimeOfDay': function() {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});Session.set('timeOfDayGreat', '0000');Session.set('timeOfDayLess', '2400');EasySearch.changeProperty('courses', 'filteredTime',  {$gte: '0000', $lte: '2400'});instance.triggerSearch();},
'change .topic-select': function(topicEvt) {var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});var newTopic = $(topicEvt.target).val();Session.set('topicQuery', newTopic);EasySearch.changeProperty('courses', 'filteredTopic', newTopic);instance.triggerSearch();if (Session.equals('topicQuery', 'All Topics')) {Session.set('topicQuery', {$ne : ''});EasySearch.changeProperty('courses', 'filteredTopic', {$ne : ''});instance.triggerSearch();}},
//--- Breadcrumb Events
'click .crumb-topic-reset': function () {Session.set('topicQuery', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredTopic', {$ne : ''});instance.triggerSearch();},
'click .crumb-dept-reset': function () {Session.set('departmentQuery', {$ne : ''});Session.set('departmentCrumb', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredDept', {$ne : ''});instance.triggerSearch();},
'click .crumb-subj-reset': function () {Session.set('subjectCodeQuery', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredSubj', {$ne : ''});instance.triggerSearch();},
'click .crumb-format-reset': function () {Session.set('courseFormatQuery', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredFormat', {$ne : ''});instance.triggerSearch();},
'click .crumb-monday-reset': function () {Session.set('mondayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredMon', {$ne : ''});instance.triggerSearch();},
'click .crumb-tuesday-reset': function () {Session.set('tuesdayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredTue', {$ne : ''});instance.triggerSearch();},
'click .crumb-wednesday-reset': function () {Session.set('wednesdayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredWed', {$ne : ''});instance.triggerSearch();},
'click .crumb-thursday-reset': function () {Session.set('thursdayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredThu', {$ne : ''});instance.triggerSearch();},
'click .crumb-friday-reset': function () {Session.set('fridayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredFri', {$ne : ''});instance.triggerSearch();},
'click .crumb-saturday-reset': function () {Session.set('saturdayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredSat', {$ne : ''});instance.triggerSearch();},
'click .crumb-sunday-reset': function () {Session.set('sundayClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredSun', {$ne : ''});instance.triggerSearch();},
'click .crumb-term-reset': function () {Session.set('termSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredTerm', {$ne : ''});instance.triggerSearch();},
'click .crumb-school-reset': function () {Session.set('collegeSort', {$ne : ''}); Session.set('divisionSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredCollege', {$ne : ''});EasySearch.changeProperty('courses', 'filteredDivision', {$ne : ''});instance.triggerSearch(); },
'click .reset-degree': function() {Session.set('degStudClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredAttr', {$ne : ''});instance.triggerSearch();},
'click .crumb-location-reset': function () {Session.set('campusSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredCampus', {$ne : ''});instance.triggerSearch();},
'click .crumb-grad-reset': function () {Session.set('gradClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredGrad', {$ne : ''});instance.triggerSearch();},
'click .crumb-ugrad-reset': function () {Session.set('uGradClickSort', {$ne : ''});var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});EasySearch.changeProperty('courses', 'filteredUgrad', {$ne : ''});instance.triggerSearch();},
});