Router.route('/api/:_id', function(){
  this.response.statusCode = 200;
  this.response.setHeader("Content-Type", "application/json");
  this.response.setHeader("Access-Control-Allow-Origin", "*");
  this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  this.response.end(JSON.stringify(
    Courses.findOne({CRSE_ID_KEY: this.params._id}, {fields: {
    	_id: 1,
    	//DEPT: 1,
    	DEPT_DESC: 1,
    	SUBJ: 1,
    	//SUBJ_DESC: 1,
    	CRSE: 1,
    	CRSE_ST: 1,
    	CRSE_TITLE: 1,
    	//COURSE_DESCRIPTION: 1,
    	COLLEGE_DESC: 1,
    	CREDIT_HR: 1,
    	CRSE_ID_KEY: 1, //--- Used
    	//vix_school_long: 1,
    	//vix_school_short: 1,
    	'vix_sections.SEC_TITLE': 1,
    	'vix_sections.SEC_TERM_DESC': 1,
    	'vix_sections.CRN': 1,//--- Used
    	'vix_sections.SECTION_NUMB': 1,
    	//'vix_sections.CAMPUS': 1,
    	//'vix_sections.CAMPUS_DESC': 1,
    	//'vix_sections.LV1': 1,
    	//'vix_sections.LV2': 1,
    	//'vix_sections.CREDIT_HR': 1,
    	'vix_sections.INSTRUCTOR_PRIM': 1,//--- Used
    	'vix_sections.CRSE_TITLE': 1,
    	'vix_sections.COURSE_DESCRIPTION': 1,
    	'vix_sections.vix_prereq': 1,
    	'vix_sections.vix_section_meeting_times.BEGIN_TIME': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.END_TIME': 1,
    	//'vix_sections.vix_section_meeting_times.START_DATE': 1,
    	//'vix_sections.vix_section_meeting_times.END_DATE': 1,
    	'vix_sections.vix_section_meeting_times.BUILDING_DESC': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.ROOM': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.MONDAY_IND': 1, //--- Used
    	'vix_sections.vix_section_meeting_times.TUESDAY_IND': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.WEDNESDAY_IND': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.THURSDAY_IND': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.FRIDAY_IND': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.SATURDAY_IND': 1,//--- Used
    	'vix_sections.vix_section_meeting_times.SUNDAY_IND': 1,//--- Used
    	//'vix_sections.SEATS_AVAIL': 1,
    	//'vix_sections.ENRL_LIMIT': 1,
    	//'vix_sections.ENRL_ACTUAL': 1
    }})
  ));
}, {where: 'server'});
/*---------------------------------------------------------------------------------------------------------------*/
//--- http://courses.example.edu/apimulti?c[]=GPSY6112&c[]=LCST2129&c[]=NLIT3802
Router.route('/apimulti/', function(){
    var splack = JSON.stringify(
        Courses.find({
            CRSE_ID_KEY: {$in : this.params.query.c}
        }, 
        {fields: {
            CRSE_ID_KEY: 1,
            CRSE_TITLE: 1,
            'vix_sections.SEC_TERM_DESC': 1,
            CREDIT_HR: 1,
    }}).fetch())
    this.response.statusCode = 200
    this.response.setHeader("Content-Type", "application/json")
    this.response.setHeader("Access-Control-Allow-Origin", "*")
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    this.response.end( splack )
}, {where: 'server'})

/*---------------------------------------------------------------------------------------------------------------*/
//--- http://courses.example.edu/apiminor?c[]=GPSY6112&c[]=LCST2129&c[]=NLIT3802&s[]=GPSY&cred=3
Router.route('/apiminor/', function(){
    var cred = this.params.query.cred + ' ' + ' '
    var flimp = JSON.stringify(
        Courses.find({
            CREDIT_HR: cred, 
            $or: [
                {SUBJ: {$in : this.params.query.s}},
                {CRSE_ID_KEY: {$in : this.params.query.c}}
            ]
        },
        {limit: 100,
        fields: {
            CRSE_ID_KEY: 1,
            CRSE_TITLE: 1,
            'vix_sections.SEC_TERM_DESC': 1,
            CREDIT_HR: 1,
    }}).fetch())
    this.response.statusCode = 200
    this.response.setHeader("Content-Type", "application/json")
    this.response.setHeader("Access-Control-Allow-Origin", "*")
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    this.response.end( flimp )
}, {where: 'server'})
/*--------------------------------------------------------------------------------------------------------------*/