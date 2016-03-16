Template.courseList.events({
//--- Allow _blank command 
     'click a[target=_blank]': function (event) {event.preventDefault();window.open(event.target.href, '_blank');},
//--- sorting in order  
    'click .ccSortTitle': function () {
        Session.set('courseSort', {CRSE_TITLE: 1});
        Session.set('courseSortHighlight', 'title');
        var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});
        EasySearch.changeProperty('courses', 'sortBy', 'title');
        instance.triggerSearch(); 
        
    },
    'click .ccSortSubj': function () {
        Session.set('courseSort',{CRSE_ID_KEY:1}); 
        Session.set('courseSortHighlight', 'subject');
        var instance = EasySearch.getComponentInstance({index: 'courses',id: 'search'});
        EasySearch.changeProperty('courses', 'sortBy', 'subject');
        instance.triggerSearch();  
    },
    'click .ccSortCredit': function () {
        Session.set('courseSort',{CREDIT_HR:1});
        Session.set('courseSortHighlight', 'credit');
        var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search' });
        EasySearch.changeProperty('courses', 'sortBy', 'credit');    
        instance.triggerSearch();   
    }, 
     'click .ccSortDept': function () {
        Session.set('courseSort',{DEPT_DESC:1});
        Session.set('courseSortHighlight', 'department');
        var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search' });
        EasySearch.changeProperty('courses', 'sortBy', 'department');
        instance.triggerSearch();  
    },        
//--- pagination    
'click .previous': function(evt, tmpl) { if(Number(Session.get('coursecursor')) > Number(Session.get('courseLimit') - 1)) {Session.set('coursecursor', Number(Session.get('coursecursor')) - Number(Session.get('courseLimit')));}},
'click .next': function(evt, tmpl) { Session.set('coursecursor', Number(Session.get('coursecursor')) + Number(Session.get('courseLimit')));}, 
//--- number of courses to display
'click #twentyButton': function() {Session.set('courseLimit', 20);},
'click #fiftyButton': function() {Session.set('courseLimit', 50);},
'click #hundredButton': function() {Session.set('courseLimit', 100);},
//--- Set College Data Context
'change .college-select': function(evt) {
        var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});  
        var newCollege = $(evt.target).val();

        if (newCollege === 'All Schools') {
            Session.set('collegeSort', {$ne : ''});
            Session.set('divisionSort', {$ne : ''});
            EasySearch.changeProperty('courses', 'filteredCollege', {$ne : ''});
            EasySearch.changeProperty('courses', 'filteredDivision', {$ne : ''});
            instance.triggerSearch();
       // remainding data deleted from here
        };
    },
//--- Set Term Data Context            
    'change .term-select': function(term) {
        var instance = EasySearch.getComponentInstance({ index: 'courses', id: 'search'});  
        var newTerm = $(term.target).val();
            Session.set('termSort', newTerm);
            EasySearch.changeProperty('courses', 'filteredTerm', newTerm);
            instance.triggerSearch();
        if (Session.equals('termSort', 'All Terms')) {
            Session.set('termSort', {$ne : ''});
            EasySearch.changeProperty('courses', 'filteredTerm', {$ne : ''});
            instance.triggerSearch(); };
        }
});
Template.layout.helpers({advancedExist: function() {if(Session.equals('isActive', true)) { return "show-advanced";} else { return "hide-advanced";}}});
Template.courseList.helpers({
courses: function() {return Courses.find({}, {sort: Session.get('courseSort')});},
setActive: function() {return Session.set('isActive', true);},
//--- Course Title from URL
titleQueryHelper: function() {return Session.get('titleQuery');},
//--- Pagination    
prevText: function() {if(Number(Session.get('coursecursor')) < Number(Session.get('courseLimit')) ){ return '';} return(Number(Session.get('coursecursor')) - Number(Session.get('courseLimit')) ) + " - " + (Number(Session.get('coursecursor')));}, 
nextText: function() {return(Number(Session.get('coursecursor')) + Number(Session.get('courseLimit')) ) + " - " + (Number(Session.get('coursecursor')) + Number(Session.get('courseLimit') * 2) );}, 
isTwentyActive: function() {if (Session.equals('courseLimit', 20)) {return "active";}},
isFiftyActive: function() {if (Session.equals('courseLimit', 50)) {return "active";}},
isHundredActive: function() {if (Session.equals('courseLimit', 100)) {return "active";}},
//--- Active Classes on Sorting            
ccSortSubjStyle: function() {if (Session.equals('courseSortHighlight', 'subject')) { return "fa-arrow-down";} else {return "fa-long-arrow-down";}},
ccSortTitleStyle: function() {if (Session.equals('courseSortHighlight', 'title')) { return "fa-arrow-down";} else {return "fa-long-arrow-down";}},
ccSortCredStyle: function() {if (Session.equals('courseSortHighlight', 'credit')) { return "fa-arrow-down";} else {return "fa-long-arrow-down";}},
ccSortDeptStyle: function() {if (Session.equals('courseSortHighlight', 'department')) {  return "fa-arrow-down";} else {return "fa-long-arrow-down";}},
fallSemYear: function() {
    Session.setDefault('faTrmBc', '')
    var dfa = new Date()
    var mfa = dfa.getMonth()
    var yfa = dfa.getFullYear()
    if (mfa > 1) {
        Session.set('faTrmBc', yfa)
        return yfa
    } else if (mfa <= 1) {
        yfa = yfa - 1
        Session.set('faTrmBc', yfa)
        return yfa
    } else {
        console.error('Fall Semester Logic Wrong')
        return yfa
    }
},
springSemYear: function() {
    Session.setDefault('spTrmBc', '')
    var dsp = new Date()
    var msp = dsp.getMonth()
    var ysp = dsp.getFullYear()
    if (msp < 8) {
        Session.set('spTrmBc', ysp)
        return ysp
    } else if (msp >= 8){
        ysp = ysp + 1
        Session.set('spTrmBc', ysp)
        return ysp
    } else {
        console.error('Spring Semester Logic Wrong')
        return ysp
    }
},
summerSemYear: function() {
    Session.setDefault('suTrmBc', '')
    var dsu = new Date()
    var msu = dsu.getMonth()
    var ysu = dsu.getFullYear()
    if (msu > 0) {
        Session.set('suTrmBc', ysu)
        return ysu
    } else if (msu === 0){
        ysu = ysu - 1
        Session.set('suTrmBc', ysu)
        return ysu
    } else {
        console.error('Summer Semester Logic Wrong')
        return ysu
    }
}
});