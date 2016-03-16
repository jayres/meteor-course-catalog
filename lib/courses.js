Courses = new Mongo.Collection('courses');
EasySearch.createSearchIndex('courses', {
'collection': Courses,
'field': ['CRSE_TITLE', 'SUBJ', 'SUBJ_DESC', 'CRSE', 'DEPT', 'DEPT_DESC', 'vix_sections.LONG_CRSE_TITLE', 'vix_sections.INSTRUCTOR_PRIM'],
'limit': 15, 
'use': 'mongo-db',
'props': {'sortBy': 'title', 
	'filteredTerm' : {$ne : ''},
	'filteredCampus' : {$ne : ''},
	'filteredCollege' : {$ne : ''},
	'filteredDivision' : {$ne : ''},
	'filteredMon' : {$ne : ''},
	'filteredTue' : {$ne : ''},
	'filteredWed' : {$ne : ''},
	'filteredThu' : {$ne : ''},
	'filteredFri' : {$ne : ''},
	'filteredSat' : {$ne : ''},
	'filteredSun' : {$ne : ''},
	'filteredLibart' : {$ne : ''},
	'filteredUgrad' : {$ne : ''},
	'filteredGrad' : {$ne : ''},
	'filteredAttr' : {$ne : ''},
	'filteredDept' : {$ne : ''},
	'filteredSubj' : {$ne : ''},
	'filteredFormat' : {$ne : ''},
	'filteredTime' : {$ne : ''},
	'filteredOpen': {$ne : ''},
	'filteredTopic' : {$ne : ''}
},
'sort': function() { 
	if (this.props.sortBy === 'title') { 
		return {CRSE_TITLE: 1}
	} else if (this.props.sortBy === 'subject') { 
		return {SUBJ: 1 }
	} else if (this.props.sortBy === 'department') { 
		return {DEPT_DESC: 1 }
	} else { 
		return {CREDIT_HR:1}
	}
},
'query': function(searchString, opts) {
	var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
	query.vix_MONDAY_IND = this.props.filteredMon;
	query.vix_TUESDAY_IND = this.props.filteredTue;
	query.vix_WEDNESDAY_IND = this.props.filteredWed;
	query.vix_THURSDAY_IND = this.props.filteredThu;
	query.vix_FRIDAY_IND = this.props.filteredFri;
	query.vix_SATURDAY_IND = this.props.filteredSat;
	query.vix_SUNDAY_IND = this.props.filteredSun;
	query.LIBART_ATTR = this.props.filteredLibart;
	query.LV1 = this.props.filteredUgrad;
	query.LV2 = this.props.filteredGrad;
	query.ATTR_NM_CODE = this.props.filteredAttr;
	query.COLLEGE_DESC = this.props.filteredCollege;
	query.vix_school_short = this.props.filteredDivision;
	query['vix_sections.CAMPUS_DESC'] = this.props.filteredCampus;
	query['vix_sections.SEC_TERM_DESC'] = this.props.filteredTerm;
	query.DEPT = this.props.filteredDept;
	query.SUBJ = this.props.filteredSubj;
	query['vix_sections.SCHEDULE_TYPE_DESC'] = this.props.filteredFormat;
	query['vix_sections.vix_section_meeting_times.BEGIN_TIME'] = this.props.filteredTime;
	query['vix_sections.SEATS_AVAIL'] = this.props.filteredOpen;
	query['vix_sections.COURSE_TOPIC1', 'vix_sections.COURSE_TOPIC2', 'vix_sections.COURSE_TOPIC3'] = this.props.filteredTopic;
	return query
}
});
if(Meteor.isClient) {
Session.setDefault('courseSort',{CRSE_TITLE: 1});
Session.setDefault('courseSortHighlight', null);
Session.setDefault('coursecursor', 0);
Session.setDefault('courseSearchFilter', '');
Session.setDefault('courseLimit', 20);
Session.setDefault('collegeSort', {$ne : ''});
Session.setDefault('divisionSort', {$ne : ''});
Session.setDefault('campusSort', {$ne : ''});
Session.setDefault('termSort', {$ne : ''});
Session.setDefault('mondayClickSort', {$ne : ''});
Session.setDefault('tuesdayClickSort', {$ne : ''});
Session.setDefault('wednesdayClickSort', {$ne : ''});
Session.setDefault('thursdayClickSort', {$ne : ''});
Session.setDefault('fridayClickSort', {$ne : ''});
Session.setDefault('saturdayClickSort', {$ne : ''});
Session.setDefault('sundayClickSort', {$ne : ''});	
Session.setDefault('libArtsClickSort', {$ne : ''});
Session.setDefault('gradClickSort', {$ne : ''});
Session.setDefault('uGradClickSort', {$ne : ''});
Session.setDefault('degStudClickSort', {$ne : ''});
Session.setDefault('departmentQuery', {$ne : ''});
Session.setDefault('departmentCrumb', {$ne : ''});
Session.setDefault('subjectCodeQuery', {$ne : ''});
Session.setDefault('courseCodeQuery', '');
Session.setDefault('courseFormatQuery', {$ne : ''});
Session.setDefault('timeOfDayGreat', '0000');	
Session.setDefault('timeOfDayLess', '2400');
Session.setDefault('courseStatus', {$ne : ''});
Session.setDefault('topicQuery', {$ne : ''});
Session.setDefault('isActive', true);
Tracker.autorun(function() {
var timeOfDayHigh = Session.get('timeOfDayGreat');
var timeOfDayLow = Session.get('timeOfDayLess');
if (timeOfDayHigh === '0000' && timeOfDayLow === '2400') {
	var timeOfDayCombo = "{$ne: ''}";
	eval('var timeObj='+timeOfDayCombo);
} else {
	var timeOfDayCombo = "{$gte: '" + timeOfDayHigh + "', $lte: '" + timeOfDayLow + "'}";
	eval('var timeObj='+timeOfDayCombo);
}
return Meteor.subscribe('courses',
Session.get('courseLimit'),
Session.get('coursecursor'),
Session.get('collegeSort'),
Session.get('divisionSort'),
Session.get('campusSort'),
Session.get('termSort'),
Session.get('mondayClickSort'),
Session.get('tuesdayClickSort'),
Session.get('wednesdayClickSort'),
Session.get('thursdayClickSort'),
Session.get('fridayClickSort'),
Session.get('saturdayClickSort'),
Session.get('sundayClickSort'),
Session.get('libArtsClickSort'),
Session.get('gradClickSort'),
Session.get('uGradClickSort'),
Session.get('degStudClickSort'),
Session.get('departmentQuery'),
Session.get('subjectCodeQuery'),
Session.get('courseCodeQuery'),
Session.get('courseFormatQuery'),
Session.get('timeOfDayGreat'),
Session.get('timeOfDayLess'),
Session.get('courseStatus'),
Session.get('topicQuery'), 
timeObj
);
});
}
if(Meteor.isServer) {
Meteor.publish('courses', function(
courseLimit,
coursecursor,
collegeSort,
divisionSort,
campusSort,
termSort,
mondayClickSort,
tuesdayClickSort,
wednesdayClickSort,
thursdayClickSort,
fridayClickSort,
saturdayClickSort,
sundayClickSort,
libArtsClickSort,
gradClickSort,
uGradClickSort,
degStudClickSort,
departmentQuery,
subjectCodeQuery,
courseCodeQuery,
courseFormatQuery,
timeOfDayGreat,
timeofDayLess,
courseStatus,
topicQuery, 
timeObj
) {
return Courses.find({ 
COLLEGE_DESC: collegeSort,
vix_school_short: divisionSort,
'vix_sections.CAMPUS_DESC': campusSort,
'vix_sections.SEC_TERM_DESC': termSort,
vix_MONDAY_IND: mondayClickSort,
vix_TUESDAY_IND: tuesdayClickSort,
vix_WEDNESDAY_IND: wednesdayClickSort,
vix_THURSDAY_IND: thursdayClickSort,
vix_FRIDAY_IND: fridayClickSort,
vix_SATURDAY_IND: saturdayClickSort,
vix_SUNDAY_IND: sundayClickSort,
LIBART_ATTR: libArtsClickSort,
LV1: uGradClickSort,
LV2: gradClickSort,
ATTR_NM_CODE: degStudClickSort,
DEPT: departmentQuery,
$or: [{SUBJ: subjectCodeQuery},{_id: courseCodeQuery}],
$and: [{$or: [{'vix_sections.COURSE_TOPIC1':topicQuery},{'vix_sections.COURSE_TOPIC2':topicQuery},{'vix_sections.COURSE_TOPIC3':topicQuery}]}],
'vix_sections.SCHEDULE_TYPE_DESC': courseFormatQuery,
'vix_sections.vix_section_meeting_times.BEGIN_TIME': timeObj,
'vix_sections.SEATS_AVAIL': courseStatus
},  
{
limit: courseLimit, 
sort: {vix_section_count: 1, CRSE_TITLE: 1 },
skip: coursecursor,
fields: { 
_id: 1,
DEPT: 1,
DEPT_DESC: 1,
SUBJ: 1,
SUBJ_DESC: 1,
CRSE: 1,
CRSE_ST: 1,
CRSE_TITLE: 1,
COURSE_DESCRIPTION: 1,
COLLEGE_DESC: 1,
CREDIT_HR: 1,
LV2: 1,
LV1: 1,
LIBART_ATTR: 1,
ATTR_NM_CODE: 1,
CRSE_ID_KEY: 1,
vix_MONDAY_IND: 1,
vix_TUESDAY_IND: 1,
vix_WEDNESDAY_IND: 1,
vix_THURSDAY_IND: 1,
vix_FRIDAY_IND: 1,
vix_SATURDAY_IND: 1,
vix_SUNDAY_IND: 1,
vix_section_count: 1,
vix_school_long: 1,
vix_school_short: 1,
'vix_sections.SEC_TITLE': 1,
'vix_sections.SCHEDULE_TYPE_DESC': 1,
'vix_sections.COLLEGE_DESC': 1,
'vix_sections.DEPT_DESC': 1,
'vix_sections.SEC_TERM_DESC': 1,
'vix_sections.CRN': 1,
'vix_sections.SECTION_NUMB': 1,
'vix_sections.CAMPUS': 1,
'vix_sections.CAMPUS_DESC': 1,
'vix_sections.LV1': 1,
'vix_sections.LV2': 1,
'vix_sections.CREDIT_HR': 1,
'vix_sections.INSTRUCTOR_PRIM': 1,
'vix_sections.CRSE_TITLE': 1,
'vix_sections.LONG_CRSE_TITLE': 1,
'vix_sections.LIBART_ATTR': 1,
'vix_sections.ATTR_NM_CODE': 1,
'vix_sections.COURSE_DESCRIPTION': 1,
'vix_sections.vix_prereq': 1,
'vix_sections.vix_section_meeting_times.BEGIN_TIME': 1,
'vix_sections.vix_section_meeting_times.END_TIME': 1,
'vix_sections.vix_section_meeting_times.START_DATE': 1,
'vix_sections.vix_section_meeting_times.END_DATE': 1,
'vix_sections.vix_section_meeting_times.BUILDING_DESC': 1,
'vix_sections.vix_section_meeting_times.ROOM': 1,
'vix_sections.vix_section_meeting_times.MONDAY_IND': 1,
'vix_sections.vix_section_meeting_times.TUESDAY_IND': 1,
'vix_sections.vix_section_meeting_times.WEDNESDAY_IND': 1,
'vix_sections.vix_section_meeting_times.THURSDAY_IND': 1,
'vix_sections.vix_section_meeting_times.FRIDAY_IND': 1,
'vix_sections.vix_section_meeting_times.SATURDAY_IND': 1,
'vix_sections.vix_section_meeting_times.SUNDAY_IND': 1,
'vix_sections.SEATS_AVAIL': 1,
'vix_sections.ENRL_LIMIT': 1,
'vix_sections.ENRL_ACTUAL': 1,
'vix_sections.COURSE_TOPIC1': 1,
'vix_sections.COURSE_TOPIC2': 1,
'vix_sections.COURSE_TOPIC3': 1,
}
});
});
Meteor.publish('courseSingle', function(singleCourseId) {
return Courses.find({CRSE_ID_KEY: singleCourseId},
{fields: {
	DEPT: 1,
	DEPT_DESC: 1,
	SUBJ: 1,
	SUBJ_DESC: 1,
	CRSE: 1,
	SCHEDULE_TYPE_DESC: 1,
	CRSE_ST: 1,
	CRSE_TITLE: 1,
	COURSE_DESCRIPTION: 1,
	COLLEGE_DESC: 1,
	CREDIT_HR: 1,
	LV2: 1,
	LV1: 1,
	LIBART_ATTR: 1,
	ATTR_NM_CODE: 1,
	CRSE_ID_KEY: 1,
	vix_MONDAY_IND: 1,
	vix_TUESDAY_IND: 1,
	vix_WEDNESDAY_IND: 1,
	vix_THURSDAY_IND: 1,
	vix_FRIDAY_IND: 1,
	vix_SATURDAY_IND: 1,
	vix_SUNDAY_IND: 1,
	'vix_sections.SEC_TITLE': 1,
	'vix_sections.COLLEGE_DESC': 1,
	'vix_sections.DEPT_DESC': 1,
	'vix_sections.SEC_TERM_DESC': 1,
	'vix_sections.CRN': 1,
	'vix_sections.SECTION_NUMB': 1,
	'vix_sections.vix_prereq': 1,
	'vix_sections.CAMPUS': 1,
	'vix_sections.CAMPUS_DESC': 1,
	'vix_sections.LV1': 1,
	'vix_sections.LV2': 1,'vix_sections.CREDIT_HR': 1,
	'vix_sections.MONDAY_IND': 1,
	'vix_sections.TUESDAY_IND': 1,
	'vix_sections.WEDNESDAY_IND': 1,
	'vix_sections.THURSDAY_IND': 1,
	'vix_sections.FRIDAY_IND': 1,
	'vix_sections.SATURDAY_IND': 1,
	'vix_sections.SUNDAY_IND': 1,
	'vix_sections.INSTRUCTOR_PRIM': 1,
	'vix_sections.CRSE_TITLE': 1,
	'vix_sections.LONG_CRSE_TITLE': 1,
	'vix_sections.LIBART_ATTR': 1,
	'vix_sections.ATTR_NM_CODE': 1,
	'vix_sections.COURSE_DESCRIPTION': 1,
	'vix_sections.ENRL_LIMIT': 1,
	'vix_sections.ENRL_ACTUAL': 1,
	'vix_sections.SEATS_AVAIL': 1,
	'vix_sections.vix_section_meeting_times.BEGIN_TIME': 1,
	'vix_sections.vix_section_meeting_times.END_TIME': 1,
	'vix_sections.vix_section_meeting_times.START_DATE': 1,
	'vix_sections.vix_section_meeting_times.END_DATE': 1,
	'vix_sections.vix_section_meeting_times.BUILDING_DESC': 1,
	'vix_sections.vix_section_meeting_times.ROOM': 1,
	'vix_sections.vix_section_meeting_times.MONDAY_IND': 1,
	'vix_sections.vix_section_meeting_times.TUESDAY_IND': 1,
	'vix_sections.vix_section_meeting_times.WEDNESDAY_IND': 1,
	'vix_sections.vix_section_meeting_times.THURSDAY_IND': 1,
	'vix_sections.vix_section_meeting_times.FRIDAY_IND': 1,
	'vix_sections.vix_section_meeting_times.SATURDAY_IND': 1,
	'vix_sections.vix_section_meeting_times.SUNDAY_IND': 1}
});
});
}