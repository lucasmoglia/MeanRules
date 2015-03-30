/* 
 * HeroModel JS
 * ===========================
 * Grab the mongoose module...
 * 
 */

/*Modules
 *=================================
 */
	var mongoose = require('mongoose');

/*Our Hero model definition!
 *================================= 
 */
	
// module.exports allows us to pass this to other files when it is called...
module.exports = mongoose.model('hero', { name : {type : String, default: ''}, 
										  weapon: {type : String, default: ''},
										  level: {type : String, default: ''},
										  life: {type : String, default: ''}
										});