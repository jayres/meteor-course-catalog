Template.courseDetails.helpers({ 
liberalArtsIs: function(LIBART_ATTR) {return this.LIBART_ATTR === LIBART_ATTR;},
openToMajorsIs: function(ATTR_NM_CODE) {return this.ATTR_NM_CODE === ATTR_NM_CODE;},
setInactive: function() {return Session.set('isActive', false);},   
openClosed: function() {var openClosedVal = this.SEATS_AVAIL;
    if (openClosedVal > 0 && openClosedVal < 5) {
       return new Spacebars.SafeString('<span style="color: orange;">Open</span>');
    } 
    if (openClosedVal >= 5) {
        return new Spacebars.SafeString('<span style="color: green;">Open</span>');
    } 
    if (openClosedVal <= 0) {
        return new Spacebars.SafeString('<span style="color: red;">Closed</span>');
    }
}, 
courseTitle: function() {
    if(this.SEC_TITLE) {
        return this.SEC_TITLE;
    } else if (this.LONG_CRSE_TITLE) {
        return this.LONG_CRSE_TITLE;
    } else {
        return this.CRSE_TITLE;
    }
}
});
Template.subsectionData.helpers({
startDate: function() {return this.START_DATE.toLocaleDateString();},
endDate: function() {return this.END_DATE.toLocaleDateString();},
startTime: function() {if (this.BEGIN_TIME) {var begin = this.BEGIN_TIME;var hours24 = parseInt(begin.substring(0,2),10);var hours = ((hours24 + 11) % 12) + 1;var amPm = hours24 > 11 ? ' p.m.' : ' a.m.';var minutes = begin.substring(2);return hours + ':' + minutes + amPm + ' - ';}},
endTime: function() {if (this.END_TIME) {var end = this.END_TIME;var hours24 = parseInt(end.substring(0,2),10);var hours = ((hours24 + 11) % 12) + 1;var amPm = hours24 > 11 ? ' p.m.' : ' a.m.';var minutes = end.substring(2);return hours + ':' + minutes + amPm;}}
});