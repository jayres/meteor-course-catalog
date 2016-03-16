Router.configure({
layoutTemplate: 'layout', //layout.html
loadingTemplate: 'loading', //loading.html
notFoundTemplate: 'notFound' //notfound.html 
});
Router.map(function() {
//--- handles the route for displaying all posts - courselist.html
this.route('courseList', { 
path: '/',
waitOn: function() {
//--- Conditionals Handle the URL Queries
//--- Grad/Undergrad Query
if (this.params.query.grad) { Session.set('uGradClickSort', null);}
if (this.params.query.ugrad) { Session.set('gradClickSort', null);}
//--- Day of the Week Query
if (this.params.query.monday) { console.log('nomonday'); Session.set('mondayClickSort', null);}
if (this.params.query.tuesday) { Session.set('tuesdayClickSort', null);}
if (this.params.query.wednesday) { Session.set('wednesdayClickSort', null);}
if (this.params.query.thursday) { Session.set('thursdayClickSort', null);}
if (this.params.query.friday) { Session.set('fridayClickSort', null);}
if (this.params.query.saturday) { Session.set('saturdayClickSort', null);}
if (this.params.query.sunday) { Session.set('sundayClickSort', null);}			
//--- Term/Semester Query
function fallURLSem() {
    var dfa = new Date()
    var mfa = dfa.getMonth()
    var yfa = dfa.getFullYear()
    if (mfa > 1) { return yfa
    } else if (mfa <= 1) { yfa = yfa - 1; return yfa
    } else { return yfa }
}
function springURLSem() {
    var dsp = new Date()
    var msp = dsp.getMonth()
    var ysp = dsp.getFullYear()
    if (msp < 8) { return ysp
    } else if (msp >= 8){ ysp = ysp + 1; return ysp
    } else { return ysp}
}
function summerURLSem() {
    var dsu = new Date()
    var msu = dsu.getMonth()
    var ysu = dsu.getFullYear()
    if (msu > 0) { return ysu
    } else if (msu === 0){ ysu = ysu - 1; return ysu
    } else { return ysu }
}
if (this.params.query.fall) {Session.set('termSort', 'Fall ' + fallURLSem());}
if (this.params.query.spring) { Session.set('termSort', 'Spring ' + springURLSem());}
if (this.params.query.summer) { Session.set('termSort', 'Summer ' + summerURLSem());}
//--- Liberal Arts (or not) Query
if (this.params.query.libart) { Session.set('libArtsClickSort', 'LIBL');}
if (this.params.query.nonlibart) { Session.set('libArtsClickSort', 'NLIB');}	
//--- Courses Open to Query
if (this.params.query.degstu) { Session.set('degStudClickSort', 'NMO');}
if (this.params.query.degsturest) { Session.set('degStudClickSort', 'NMR');}
if (this.params.query.majorsonly) { Session.set('degStudClickSort', 'NMN');}
//--- Campus Location Query
if (this.params.query.nyc) { Session.set('campusSort', 'New York City');}
if (this.params.query.online) { Session.set('campusSort', 'Online');}
if (this.params.query.paris) { Session.set('campusSort', 'Paris');}
//--- Topic Query
if (this.params.query.topic) {var topicOne = this.params.query.topic;
Session.set('topicQuery', topicOne);}
//--- Course Codes Query
if (this.params.query._id) {
var courseCode = this.params.query._id;
Session.set('courseCodeQuery', {
$in : courseCode
});
}
//--- Title Query
if (this.params.query.ctitle) {var titleCode = this.params.query.ctitle;Session.set('titleQuery', titleCode);}
//--- Subject Query
if (this.params.query.subj) {var subjectCode = this.params.query.subj; Session.set('subjectCodeQuery', {$in : subjectCode});}
//--- Department Query
if (this.params.query.department) {var deptQuery = this.params.query.department;Session.set('departmentQuery', {$in : deptQuery});}
//--- Course Format Query
if (this.params.query.format) {var courseFormat = this.params.query.format; Session.set('courseFormatQuery', courseFormat);}
//--- College Hashes
//Remaining data deleted here
//--- Subscription
return Meteor.subscribe(
'courses', 
Session.get('courseLimit'), 
Session.get('coursecursor'), 
Session.get('collegeSort'), 
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
Session.get('topicQuery')
);}
});
//--- Course Pages Route
this.route( 'courseDetails', {
path: '/courses/:_id',
waitOn: function() { 
Session.set('singleCourseId', this.params._id); 
return Meteor.subscribe('courseSingle', Session.get('singleCourseId'));},
data: function () { return Courses.findOne({_id: this.params._id}); }
});
//--- URL Generator Route
this.route( 'urlGenerator', {path: '/urlbuilder'}); 
}); 
Router.onBeforeAction('dataNotFound');